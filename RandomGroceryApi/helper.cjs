const { default: RandExp } = require("randexp")

   const baseurl="https://gorest.co.in/"
    const endpoint="/public/v2/users/"
   const auth={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40"}

    randomname="Bhuvana"+(Math.floor(Math.random()*1000))
    randomemail="bhuvana"+(Math.floor(Math.random()*1000))+"@gmail.com"
    // randomname=new RandExp(/[a-f0-9]{32}/).gen()

    const requestbody=({
    "name":randomname,
    "gender":"female",
    "email":randomemail,
    "status":"active"
    })

    // const updatebody=({
    //     "name":randomname,
    //     "gender":"female",
    //     "email":randomemail,
    //     "status":"inactive"
    //     })
    const commonHelpers = {
        replaceProperty: function (obj, key, value) {
            for (const prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    if (prop === key) {
                        obj[prop] = value;
                    } else if (typeof obj[prop] === 'object') {
                        this.replaceProperty(obj[prop], key, value);
                    }
                }
            }
        }
    };
    
    function userCredentials(requestbody) {
        //  const requestbody=({
        //     "name":randomname,
        //     "gender":"female",
        //     "email":randomemail,
        //     "status":"active"
        //     })
       const  updatestatus = JSON.parse(JSON.stringify(requestbody));
        commonHelpers.replaceProperty(updatestatus, "status", "inactive");
        
        const response = {
            updatestatus: updatestatus,
        };
        return response;
    }
      module.exports={baseurl,endpoint,auth,requestbody,commonHelpers,userCredentials}