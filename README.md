# Embedded Playground
An awesome little extension which allows you to look at all the Bolt related network requests and file loads so that digging through network and reading raw json is not needed.

This extension allows you to dynamically plug in embedded accounts into any site! All you need is the name of a div id on a merchant site. 
For example, on lululemon.com, the div id name for the email input is 'contact-email' and the div id name for the payment component is 'payment-accordion'. Then, choose the component of your choice and you're good to go.

If you don't provide a div id name, the component will mount to a top-level div on the site. 

## Installation Guide
Since this is a private, unpublished plugin, you'll have to install this manually on your browser.
1. Pull the repo, or use Github's "Download Zip" feature.
2. Go to Chrome > Manage Extensions.
3. Check the top right cortrner and make sure that Developer Mode is enabled.
4. Click on **Load Unpacked** and select bolt-debug-plugin's **src** folder.

Done! The extension is added to your Chrome Browser.