# Node DuckDNS client
This is a DuckDNS client in ~50 lines of non-uglified code with only 2 dependencies, making it easy to trust and easy to use anywhere NodeJS is supported.

## Getting Started
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
Write your configuration settings to `credentials.json` using the following format:
```json
{
    "token": "jow4235-253j-j25i-pi35-oj235oi2j35o",
    "domains": ["example-domain"]
}
```

### Step 4: Schedule the script
First install pm2 for handling scheduling
```bash
npm install -g pm2
```

Next tell PM2 to run the process eternally:
```bash
pm2 start process.js
```

## Stopping the script
To stop the script use this command using a terminal in the project directory:
```bash
pm2 stop process.js
```
Other commands include `restart`, `stop`, and `delete`. Please see the [pm2 npm page](https://www.npmjs.com/package/pm2) for more info.