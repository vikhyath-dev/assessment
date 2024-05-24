import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <h4 className="font-bold">1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.</h4>
        <h6 className="mt-3">Most Favourite</h6>
        <div className="ml-5">

          <li  className="mt-3">Dig through logs to troubleshoot a customer's broken project</li>
          <p className="text-gray-400">I love digging through logs to troubleshoot a customer's broken project. It gives me a sense of satisfaction when we solve the queries and help resolve the issues they're facing</p>
          <br/>

          <li>Write and maintain support articles and docs pages</li>
          
          <p className="text-gray-400">I love sharing my knowledge through blogs and technical contents. In Twilio I have contributed to the officlal Twilio blog <a className="text-green-500" href="https://www.twilio.com/en-us/blog/custom-twilio-alerting-system-express-mongodb-sendgrid">https://www.twilio.com/en-us/blog/custom-twilio-alerting-system-express-mongodb-sendgrid</a></p>
          
          <p></p>
          
          <li className="mt-3">Work with the product team to develop a new feature based on feedback from customers</li>
          <p className="text-gray-400">

          The support team will have greater visibility into customer pain points and the features they are seeking. Collaborating with the product team to enhance the product based on customer feedback enables us to directly impact user satisfaction and product quality. It also aids in understanding the feasibility of the request and informing the customer whether it is possible to implement or not.        
          In Twilio I have seen customers requesting a Group Whatsapp messaging feature and due to meta limitations, we could't implement this. So, we have provided the workaround for the feature and I had the opportunity to contribute to this - <a className="text-green-500" href="https://github.com/TwilioDevEd/whatsapp-group-messaging/pull/5">https://github.com/TwilioDevEd/whatsapp-group-messaging/pull/5</a>

            </p>



          <li className="mt-3">Help train and onboard new support teammates</li> 
          <p className="text-gray-400">I enjoy sharing my knowledge and expertise with others. During my time at Twilio, I had the opportunity to train two new colleagues who were at the same level as me. It was a rewarding experience. I believe that when we share our knowledge with others, we also enrich our own learning. I would welcome the chance to continue this practice at Vercel if given the opportunity</p>         
        
          <li className="mt-3">Respond to queries on Twitter, Reddit, Hacker News, and other 3rd party sites/</li>
          <p className="text-gray-400">
          Engaging with users on various platforms helps in building a strong community around the product and addressing user concerns in real-time. I believe it can also help with my personal growth.
          </p>
        </div>

        <h6 className="mt-3">Least Favourite</h6>
        <div className="ml-5">

        <li className="mt-3">Create video tutorials to help teach users a specific feature or use case</li>
        <p className="text-gray-400">While this may not be the thing I don't want to do, but I prefer to do less of these things. This is mainly due to the experience in this particular aspect. In my role at Twilio, I have supported multiple customers through zoom sessions, but creating a video tutorial will be a new thing for me. I am willing to learn the art of making video tutorial for a specific concept or troubleshooting issue and willing to do this.</p>



        <li className="mt-3">Manage a support team</li> 
        <p className="text-gray-400">While leadership roles can be fulfilling, managing a support team also comes with its challenges, such as handling conflicts and ensuring team performance. I believe, I should gather the necessry skills to managing the team</p>
<br/>
        <li>Analyze hundreds of support tickets to spot trends the product team can use</li>
        <p className="text-gray-400">While this can be valuable for product improvement, the task itself can be tedious and repetitive, particularly when handling a large volume of tickets. Utilizing automation (AI) or specialized tools could help us manage this more effectively</p>

<br/>
        <li className="mt-3">Work with people to figure out if Vercel is suitable for their use case</li>
        <p className="text-gray-400">While I am interested in helping people determine if Vercel is suitable for their use case, I would likely engage in this task less frequently. I believe Solution Engineers are the best equipped to provide in-depth guidance and support in this area due to their specialized expertise and experience</p>
        <br/>
        
        <li>Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems</li>
        <p className="text-gray-400">
          
          
          
        I haven't had the opportunity to engage multiple users at once in a public discussion before, but I would love to do this if given the chance. It's an exciting prospect to answer their questions and troubleshoot problems in a public forum</p>
        
        </div>
        <hr className="my-4 border-t border-gray-300" />


        <h4 className="font-bold mt-3">2. What do you want to learn or do more of at work?</h4>
        <p className="text-gray-400">
          
        My primary motivation for applying to this role lies in my interest with startup environment. I am eager to immerse myself in startup culture, understand customer pain points, and offer effective assistance. Additionally, I am interested in advancing my skills in Next.js development, and I see this position as a valuable opportunity for growth in that area also. Given the role's developer focus, I am confident it will facilitate my personal development by exposing me to a diverse range of technologies.
       
       <br/>
       
       

        </p>
        <hr className="my-4 border-t border-gray-300" />

         <h4 className="font-bold mt-3">3. Describe how you solved a challenge or technical issue that you faced in a previous role
(preferably in a previous support role). How did you determine that your solution was
successful?</h4>
        <p className="text-gray-400">

          During my role at Twilio, I had the opportunity to solve complex tickets. One of such issues was that a customer was facing issues with Public Key Client validation in Twilio. 
          Twilio basically requires Basic Authentication to access any APIs. When we create an account, we will get an Account SID and Auth Token which can be used as username and password for Authentication. Alternatively, we can create API Keys. 
          This is same for all customers(free/paid/enterprise). But, the customers who are part of Twilio Enterprise Edition or Twilio Security Edition plans will have access to an additonal level of security called Public Key Client Validation, where you can use private key and public key to pass an additonal JWT Token in the Twilio-Client-Validation header. 

          <br/><br/>
          The customer recently purchased the enterprise plan and was trying to setup this functionality. The customer was using PHP to implement this, but Twilio's public documentation has an example only in <a className="text-red-800" href="https://www.twilio.com/docs/iam/pkcv/quickstart#client-validation-java-example">Java</a>. The official documentation suggest to use Java and we do not suggest the customer to create the token manually as it involves multiple steps and if the customer make any mistakes, it will not return a valid JWT.
          So, since there was no PHP example, customer was creating the token manually and facing an error <b>[HTTP 401] Unable to create record: Inclusion of PKCV header is not permitted with current authentication flow</b>. Since I haven't seen this error before, I quickly searched this error in Zendesk and Slack, and I found that few other customer also faced this issue earlier. The issue here was that, when the customer authentciate using PKCV header, they should pass API Key and API secret as basic authentication instead of Account SID and Auth Token. 
          I suggested the same to the customer and this issue is resolved, but they were getting another error <b>[HTTP 401] Unable to create record: The request signature in JWT is invalid or missing</b>

          <br/><br/>

          Since the error message was related to invalid token, I asked the customer to share the token and decoded it using jwt.io and the payload was lookig fine. Since we suggested the customer's to use the officlal Java helper library method, I told the customer to try with Java method. But the issue with the Java example is that it performs all the steps from the beginning, i.e creating new private and public keys, creating a credential SID etc. But the customer already had all these created. So, I looked into the Java example and modified as per customer requirement and shared it with the customer. Fortunately the issue was resolved. The PKCV was working fine in Java, but failing in PHP. So, to troubleshoot the issue further, I has aksed the customer to share the PHP code and started debugging it. 
          The manual implementaiton was looking good and I couldn't identify the iussue and as mentioned bhy the customer, it was throwing the error. I tried using both GET and POST requests, but GET request was working fine and only the POST requests was failing. So, I though there maybe some issue with the request parameters and I thought the issue maybe with encoding. So, I made a POST request using the POST body params without having any special characters(like spaces) and the request was successful. Then I found that the logic the customer was using to encode the request body was wrong. So, I suggested the customer to verify this and the issue was resolved.

          <br/><br/>
          To determine my solution was successful, I verified this with the customer and once I have received an acknowledgement from the customer, I have set the ticket to Solved!

.


        </p>




<hr className="my-4 border-t border-gray-300" />

<h4 className="font-bold my-3">

When would you choose to use Edge Functions, Serverless Functions, or Edge
Middleware with Vercel?
</h4>
<br/><br/>
Edge Functions: <br/><br/>

Edge Functions are required when we need to execute code closer to the end user, to optimize performance or customize content delivery.
Ideal for tasks like URL rewriting, caching, A/B testing, and security enhancements.
Edge Functions are best suited for scenarios where low latency and high availability are critical, such as delivering personalized content.

<br/><br/>
Serverless Functions:<br/><br/>

Serverless Functions can be used when you need server side code execution without worrying about the underlying infrasture. Serverless Functions are scalable and cost-effective, as they only consume resources when triggered, making them suitable for asynchronous tasks and applications with fluctuating traffic patterns.
<br/><br/>

Edge Middleware:<br/><br/>
Using Edge Middleware, depending on the incoming request, you can execute custom logic, rewrite, redirect, add headers and more, before returning a response. It is useful for tasks like request/response logging, header manipulation, content compression, and enforcing security policies.
<hr className="my-4 border-t border-gray-300" />



<h4 className="font-bold my-3">
5. Imagine a customer writes in requesting help with a build issue on a framework or
technology that you've not seen before. How would you begin troubleshooting this and
what questions would you ask the customer to understand the situation better?
  </h4>

  Troubleshooting an issue with a framework or technology that I have never seen before may feel difficult, but with the huge amount of resources available online, it shouldn't be challenging. 
  To begin with, first I would ask the customer to provide a detailed description of the problem they are facing during the build process. This could include any error messages, screenshot of the issue etc. Then, I would refer to the official documentation of the framework the customer is using. 
  
  I will specifically look into the build process and check if the customer is doing anything wrong. 
  
  I will then search the specific error message in google (Stackoverflow or other forums) to see if any other customer faced similar issue. If there are solutions provided in any forums, then I will share it with the customer. 

  If the issue still persists, I will try to reproduce the issue on my end and see if there is any bug in the framework or the issue is on our end. 

  <br/>I will ask the following question to the customer.

  <li>
  What version of the framework/technology are you using?
  </li>
  <li>
  Have you made any recent changes to your codebase or configuration?
  </li>
  <li>
    Is the issue happening with your current build only? Is your application working fine in the production?
  </li>
<li>
Could you please share the details of your build configuration or scripts? 
</li>
  <hr className="my-4 border-t border-gray-300" />


  <h4 className="font-bold my-3">

  6. The customer from question 5 replies to your response with the below:

“I'm so frustrated. I've been trying to make this work for hours and I just can't figure it
out. It must be a platform issue so just fix it for me instead of asking me questions.”
Please write a follow-up reply to the customer.  
</h4>

<br/><br/>

Hi there,

<br/><br/>Thanks for your response! <br/><br/>I understand your frustration and appologies for the inconvenience you have experienced.
While it is possible there may be a platform related issue, but having additonal details about the issue will help us to debug the issue better. 

I kindly request your cooperation in providing additional details as requested earlier.  Rest assured, we are committed to assisting you until this issue is resolved satisfactorily.
<br/><br/>

I look forward to your response.

<br/><br/>

Best,<br/>
Vikhyath<br/>
Vercel Support



<hr className="my-4 border-t border-gray-300" />


<h4 className="font-bold mt-3">7. When would you choose to use Edge Functions, Serverless Functions, or Edge
Middleware with Vercel?</h4>

<div className="text-gray-400">
  Hi there,<br/><br/>
  Thanks for reaching out to Vercel Support! My name is Vikhyath and I will be assisting you further. <br/><br/>

  I understand that you need to do a redirect from /blog to https://example.com. I am happy to help you!<br/><br/>

  Regarding your query, you can use configuration-based redirects to redirect to a different URL. If you are using Next.js, you can simply edit your next.config.js as shown below. 
  <br/><br/>

  <pre>
  <code>
    const nextConfig = {`{
      async redirects() {
        return [
          {
            source: '/blog',
            destination: 'https://example.com',
            permanent: true,
          }
        ]
      }
    };`}
  </code>
</pre>

If you are not using Next.js, you need to update your vercel.json file which is located in the root of your application as shown below<br/><br/> 


<pre>
  <code>
    const nextConfig = {`
{
  "redirects": [
    {
      "source": "/blog",
      "destination": "https://example.com"
    }
  ]
};
`}
  </code>
</pre>

Please refer to these document for more details:<br/><br/>

* Configuration redirects - <a className="text-blue-500" href="https://vercel.com/docs/edge-network/redirects#configuration-redirects">https://vercel.com/docs/edge-network/redirects#configuration-redirects</a>
<br/>* Updating vercel.json - <a className="text-blue-500"  href="https://vercel.com/docs/projects/project-configuration#redirects">https://vercel.com/docs/projects/project-configuration#redirects</a>
</div>

<br/><br/>

Also note that, if you want to send users to different URLs without modifying the visible URL, you can use Rewrites instead of redirects. I would recommend you to refer to this document for additional details - <a className="text-blue-500" href="https://vercel.com/docs/edge-network/rewrites#how-do-rewrites-work">https://vercel.com/docs/edge-network/rewrites#how-do-rewrites-work</a>

<br/><br/>
Please let me know if the information provided was useful. Feel free to let me know if you have any other queries or questions, I am happy to help.
<br/><br/>

Best,<br/>
Vikhyath<br/>
Vercel Support




<hr className="my-4 border-t border-gray-300" />


<h4 className="font-bold my-3">
8. A customer is creating a site and would like their project not to be indexed by search
engines. Please write a reply to the customer. Feel free to add any information about
your decision making process after the reply.
</h4>

Hi there,<br/><br/>
  Thanks for reaching out to Vercel Support! My name is Vikhyath and I will be assisting you further. <br/><br/>

  I understand that you want to prevent your sites from being indexed by the search engines. I am happy to help you!

  To impelement this, you can use a "x-robots-tag: noindex" header. That's what Vercel already does automatically for Preview deployments to prevent negative SEO impact from duplicate content. If you are using Next.js, you can impelement this in your next.config.js file and if you are using any other frameworks, you can simply add the headers in vercel.json file. Pleasen refer to this comprehensive guide on this topic - <a className="text-blue-500" href="https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines">https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines</a>
      
      <br/><br/>You can also refer to this github discussion for more details - <a className="text-blue-500" href="https://github.com/orgs/vercel/discussions/1060">https://github.com/orgs/vercel/discussions/1060</a>
   
<br/><br/>
Please let me know if the information provided was useful. Feel free to let me know if you have any other queries or questions, I am happy to help.
<br/><br/>

Best,<br/>
Vikhyath<br/>
Vercel Support




<hr className="my-4 border-t border-gray-300" />


   

   
<h4 className="font-bold my-3">

9. What do you think is one of the most common problems which customers ask Vercel for
help with? How would you help customers to overcome common problems, short-term
and long-term?
</h4>

I guess, deploying and configuring projects is a common challenge customers often reach out to Vercel for help with. 
In the short term, I will provide step by step guides and personalized troubleshooting support via different channels to solve the issues.
<br/><br/>

As a long term, it would be better to document the common issues faced by the customer and we can publish it in the official website or in github issues. 
</div>

    </main>
  );
}


