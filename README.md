Project Overview:This project is part of the Cloud Resume Challenge, designed to demonstrate cloud skills by building and deploying a personal resume website. 
The challenge encompasses various cloud technologies and practices, including static website hosting, content delivery networks, and domain management.

Live Demo:(https://d2ywrlvknzpw19.cloudfront.net)

Features: Static Resume Website: Developed using HTML and CSS.
      AWS S3 Hosting: The website is hosted on Amazon S3, ensuring high availability and durability.
      AWS CloudFront: Utilized Amazon CloudFront for global content delivery, improving site performance and speed.
      Custom Domain and DNS Management: Configured a custom domain and managed DNS settings using Amazon Route 53.
      
Setup Instructions: 
Prerequisites:
  An AWS account
  AWS CLI installed and configured
  Git installed
Step-by-Step Setup Instructions
1. Clone the Repository
First, clone the repository to your local machine:

2. Edit the HTML and CSS
If you need to make changes to the HTML or CSS files, you can do so in your preferred code editor. The primary files are:
   index.html
   styles.css

3. Create and Configure an IAM User
Navigate to the IAM service in the AWS Management Console
Create a new IAM user:
Go to "Users" and click "Add user".
Enter a user name (e.g., s3-cloudfront-user).
Select "Programmatic access" for the access type.
Click "Next: Permissions".
Attach the necessary policies:

Click on "Attach existing policies directly".
Attach the following policies:
AmazonS3ReadOnlyAccess
CloudFrontFullAccess
Click "Next: Tags" and then "Next: Review".
Click "Create user".
Download the credentials: Make sure to download the access key and secret key or copy them securely.

4. Create an S3 Bucket and Upload Files
Log in to your AWS Management Console.
Navigate to S3 and create a new bucket:
Go to the S3 service.
Click on "Create bucket".
Enter a unique bucket name (e.g., your-resume-bucket).
Choose the region closest to you.
Leave the default settings and click "Create bucket".
Upload your files to the S3 bucket:
Click on your newly created bucket.
Click on the "Upload" button.
Add the index.html and styles.css files from your local repository.
Click "Upload".
Configure the bucket for static website hosting:
Go to the "Properties" tab.
Scroll down to the "Static website hosting" section and click "Edit".
Enable "Use this bucket to host a website".
Set the "Index document" to index.html.
Click "Save changes".

5. Set Up CloudFront Distribution
Navigate to CloudFront in the AWS Management Console.
Create a new CloudFront distribution:
Click on "Create Distribution".
Under the "Origin" settings:
Set the "Origin Domain Name" to your S3 bucket (you can find this in the S3 bucket properties).
Set "Origin Access Control Settings" to allow CloudFront to access your S3 bucket.
Under "Default Cache Behavior Settings":
Set the "Viewer Protocol Policy" to "Redirect HTTP to HTTPS".
Under "Distribution Settings":
Set "Price Class" to the appropriate level based on your needs.
Enable "AWS WAF" if you need additional security settings.
Click "Create Distribution".
Restrict access to your S3 bucket:
Go back to your S3 bucket.
Go to the "Permissions" tab.
Click on "Bucket Policy".
Add a policy to only allow access from the CloudFront distribution. Replace your-cloudfront-id with your actual CloudFront distribution ID:

6. Access the Website
Once the CloudFront distribution is fully deployed (this may take a few minutes), you can access your resume website using the CloudFront distribution domain name provided in the CloudFront console.



