RetailMeNot Firefox Addon
========

This Firefox addon will open a new tab to search RetailMeNot for your current webpage to see if there are any coupons that you can utilize.

Installation
========

To build and install this extension from source, you will first need to install [Mozzila's Add-On SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation). Once that is installed, run the following command in the root directory (where the package.json is stored):

```
jpm xpi
```

This will then create an .xpi file (IE @retailmenot-firefox-addon-0.0.1.xpi). Once this file is generated, go to Firefox and choose File - Open File and select the .xpi file you generated. Firefox will then ask if you want to install the addon.