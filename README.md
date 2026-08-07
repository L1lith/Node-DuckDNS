# Node DuckDNS client
This is a [DuckDNS](https://duckdns.org) client in ~50 lines of non-uglified code with only 2 dependencies, making it easy to trust and easy to use anywhere NodeJS is supported. DuckDNS is a straightforward dynamic DNS service, making it easy to have a static domain name pointing to your computer even when your home network routinely changes it's external ip address. 

## Getting Started
*Note for beginners:* these instructions expect that you can figure out very basic terminal usage (particularly the `cd` command), as well as have [git](https://git-scm.com/) and [Node.js](https://nodejs.org/en) installed. To learn how to use the terminal please [see this tutorial](https://www.marktechpost.com/2025/04/01/the-complete-beginners-guide-to-terminal-command-prompt/).
### Step 1: Clone the repo
```bash
git clone https://github.com/L1lith/Node-Duck-DNS
```
make sure to cd into the directory in your terminal afterwards

### Step 2: Install the dependencies
```bash
npm install
```

### Step 3: Configure the credentials
Write your configuration settings to `credentials.json` using the below format. Copy and paste it into a new file with the aforementioned name then replace the values on the right side with your own unique domain and token:
```json
{
    "token": "jow4235-253j-j25i-pi35-oj235oi2j35o",
    "domains": ["example-domain"]
}
```

### Step 4: Schedule the script
First install pm2 for handling scheduling:
```bash
npm install -g pm2
```

Next tell PM2 to run the process eternally:
```bash
pm2 start process.js
```

Next if you'd like to make it start automatically on your device's boot you'll have to enable PM2 startup integration. This depends on which operating system you use.

Option A - If you use **Windows**:

[Follow these install instructions](https://github.com/jessety/pm2-installer#install)

Option B - If you use **Linux, Mac or anything else** run this command:
```bash
pm2 startup
```

**Lastly**, on all operating systems you will need to save your pm2 process list, which tells pm2 to save your process to it's startup sequence.
```bash
pm2 save
```

## Stopping the script
To stop the script use this command using a terminal in the project directory:
```bash
pm2 stop process.js
```
Other commands include `restart`, `stop`, and `delete`. Please see the [pm2 npm page](https://www.npmjs.com/package/pm2) and [pm2 docs](https://pm2.keymetrics.io/docs/usage/quick-start/) for more info.