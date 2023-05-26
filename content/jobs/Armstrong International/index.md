---
id: '3'
title: 'Software Solutions Architect'
company: 'Armstrong International'
location: 'Boston, MA'
range: 'September 2019 - February 2020'
url: 'https://www.armstronginternational.com/product-systems/sage-by-armstrong'
technologies:
  [
    { name: 'java', size: 50 },
    { name: 'amazondynamodb', size: 150 },
    { name: 'amazons3', size: 150 },
    { name: 'apache', size: 150 },
    { name: 'atlassian', size: 150 },
    { name: 'atom', size: 150 },
    { name: 'docker', size: 150 },
    { name: 'eclipseide', size: 150 },
    { name: 'github', size: 150 },
    { name: 'gradle', size: 150 },
    { name: 'jira', size: 150 },
    { name: 'json', size: 150 },
    { name: 'linux', size: 150 },
    { name: 'mongodb', size: 150 },
    { name: 'npm', size: 150 },
    { name: 'salesforce', size: 150 },
    { name: 'spring', size: 150 },
    { name: 'swagger', size: 150 },
    { name: 'ubuntu', size: 150 },
  ]
vip: false
---

---

<font size = 2 face = "Andale Mono" >

#### Functional Requirements:

➤ Developed an on-premise product version using Docker, allowing customers to install and run the product locally in their own environment. This was particularly important for customers who were in remote locations without internet access, such as oil rigs.  
➤ Replaced the User Authentication module from CAS/SAML 1.1 to Keycloak, which provided a more secure and modern authentication system for the product.  
➤ Developed the Licensing module using License 3j, which ensured that the product could not be stolen or used by a customer who had not paid for it.  
➤ Migrated AWS S3 Buckets to Minio, as cloud services were not available due to lack of internet access
➤ I Integrated with Salesforce, which allowed customers to synchronize their data between the product and Salesforce, streamlining their workflow.

#### Realized tasks:

» Created an Initialization Script that could initialize all containers and validate the license with a single command, making it easier for customers to install and run the product.  
» Updated the Authentication Services of each sub-system to work with Keycloak, ensuring that all sub-systems could authenticate users securely and consistently.  
» Obfuscated the code with ProGuard, making it harder for attackers to reverse engineer the code and find vulnerabilities.  
» Migrated users from MongoDB to Keycloak, ensuring all users could still access the product after the updated authentication system.  
» Extracted logs and current status of each container, making it easier to diagnose and troubleshoot issues with the product.

#### Technologies used:

Docker / Bash / Java / Drupal / Javascript / AWS Services / MongoDb / Postgres / Keycloak / Minio / Rabbit / SAML / CAS / ProGuard / L3j.

</font>
