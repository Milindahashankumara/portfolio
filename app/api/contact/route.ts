import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email to you (the website owner)
    const ownerEmailOptions = {
      from: process.env.EMAIL_USER,
      to: 'milindahashan50@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `NEW PORTFOLIO INQUIRY

Contact Information:
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your portfolio contact form
Time: ${new Date().toLocaleString()}
Portfolio: https://your-domain.com`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2px; border-radius: 16px;">
          <div style="background: white; border-radius: 14px; overflow: hidden;">
            
            <!-- Header with Logo and Branding -->
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); padding: 30px 40px; text-align: center; position: relative;">
              <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"20\" cy=\"20\" r=\"2\" fill=\"rgba(255,255,255,0.1)\"/><circle cx=\"80\" cy=\"40\" r=\"1.5\" fill=\"rgba(255,255,255,0.1)\"/><circle cx=\"40\" cy=\"80\" r=\"1\" fill=\"rgba(255,255,255,0.1)\"/></svg>'); opacity: 0.3;"></div>
              
              <div style="width: 48px; height: 48px; background: #ffffff; border-radius: 12px; margin: 0 auto 15px auto; box-shadow: 0 8px 16px rgba(0,0,0,0.2); position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #7c3aed;">MH</div>
              
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.2); position: relative; z-index: 1;">
                New Portfolio Inquiry
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; position: relative; z-index: 1;">
                Someone is interested in your work!
              </p>
            </div>

            <!-- Contact Information Card -->
            <div style="padding: 35px 40px 25px 40px;">
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #7c3aed; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">
                  Contact Information
                </h2>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center;">
                    <strong style="color: #475569; min-width: 80px;">Name:</strong>
                    <span style="color: #1e293b; font-weight: 600;">${firstName} ${lastName}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <strong style="color: #475569; min-width: 80px;">Email:</strong>
                    <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none; font-weight: 600;">${email}</a>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <strong style="color: #475569; min-width: 80px;">Subject:</strong>
                    <span style="color: #1e293b; font-weight: 600;">${subject}</span>
                  </div>
                </div>
              </div>

              <!-- Message Card -->
              <div style="background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #f59e0b; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">
                  Their Message
                </h3>
                <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #fed7aa;">
                  <p style="line-height: 1.7; color: #374151; margin: 0; font-size: 15px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Action Buttons -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); color: white; text-decoration: none; padding: 14px 28px; border-radius: 50px; font-weight: 600; font-size: 16px; margin: 0 8px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3); transition: all 0.3s ease;">
                  Reply Now
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 25px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0; line-height: 1.5;">
                This email was automatically sent from your portfolio contact form<br>
                <strong>Portfolio:</strong> <a href="https://your-domain.com" style="color: #7c3aed; text-decoration: none;">your-domain.com</a> | 
                <strong>Time:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Auto-reply email to the sender
    const senderEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me - Milinda Hashan',
      text: `Dear ${firstName} ${lastName},

Thank you for contacting me. I appreciate your interest and will get back to you with more information soon.

As a passionate developer and IT student at University of Moratuwa, I'm always excited to discuss new opportunities and interesting projects.

Your message: "${message}"

I'll review your message carefully and respond within 24-48 hours. In the meantime, feel free to explore my portfolio to see more of my work!

Connect with me:
• Portfolio: https://your-domain.com
• LinkedIn: https://linkedin.com/in/hashan-wickramasinghe-3853b9271

Best regards,
Milinda Hashan Wickramasinghe
Full-Stack Developer | IT Student | University of Moratuwa

---
This is an automated confirmation email
Sent: ${new Date().toLocaleString()}
Reference: #${Date.now().toString().slice(-6)}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Me</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          
          <!-- Main Container -->
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Professional Header with Logo -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 20px; text-align: center; position: relative;">
              
              <!-- Decorative Background Elements -->
              <div style="position: absolute; top: 20px; right: 30px; width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.7;"></div>
              <div style="position: absolute; bottom: 30px; left: 40px; width: 25px; height: 25px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.5;"></div>
              
              <!-- Logo Container -->
              <div style="position: relative; z-index: 2;">
                <!-- Professional CSS Logo (Always Works) -->
                <div style="width: 70px; height: 70px; background-color: #ffffff; margin: 0 auto 15px auto; border-radius: 8px; font-family: Arial, Helvetica, sans-serif; font-size: 28px; font-weight: bold; color: #667eea; line-height: 70px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 2px solid rgba(255,255,255,0.3);">
                  HW
                </div>
              </div>
            </div>
            
            <!-- White Content Box -->
            <div style="padding: 40px 30px; background-color: #ffffff;">
              
              <!-- Greeting -->
              <h2 style="margin: 0 0 20px 0; color: #333333; font-size: 24px; font-weight: bold;">
                Dear ${firstName} ${lastName},
              </h2>
              
              <!-- Body Text -->
              <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                Thank you for contacting me. I appreciate your interest and will get back to you with more information soon. Please let me know if there's anything specific you'd like to discuss.
              </p>
              
              <!-- Your Message Quote -->
              <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <p style="margin: 0 0 10px 0; color: #888888; font-size: 14px; font-weight: bold;">Your message:</p>
                <p style="margin: 0; color: #555555; font-size: 15px; line-height: 1.5; font-style: italic;">"${message}"</p>
              </div>
              
              <!-- Closing -->
              <div style="margin-top: 40px;">
                <p style="margin: 0 0 5px 0; color: #333333; font-size: 16px;">
                  Best regards,
                </p>
                <p style="margin: 0; color: #667eea; font-size: 18px; font-weight: bold;">
                  Milinda Hashan Wickramasinghe
                </p>
                <p style="margin: 5px 0 0 0; color: #888888; font-size: 14px;">
                  Full-Stack Developer | IT Student | University of Moratuwa
                </p>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e9ecef;">
              
              <!-- Simple Professional Links -->
              <div style="margin-bottom: 20px;">
                <a href="https://your-domain.com" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 600; margin: 0 15px;">
                  Visit My Portfolio
                </a>
                <span style="color: #ccc; font-size: 16px;">|</span>
                <a href="https://linkedin.com/in/hashan-wickramasinghe-3853b9271" style="color: #0077b5; text-decoration: none; font-size: 16px; font-weight: 600; margin: 0 15px;">
                  LinkedIn
                </a>
              </div>
              
              <!-- Email Info -->
              <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.4;">
                  This is an automated confirmation email.<br>
                  Sent: ${new Date().toLocaleString()}<br>
                  Reference: #${Date.now().toString().slice(-6)}
                </p>
              </div>
            </div>
            
          </div>
          
        </body>
        </html>

        <style>
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        </style>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerEmailOptions),
      transporter.sendMail(senderEmailOptions),
    ]);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again.' 
      },
      { status: 500 }
    );
  }
}