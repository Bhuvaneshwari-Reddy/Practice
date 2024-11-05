const axios=require("axios")
const chai=require("chai")
const expect=chai.expect


describe("Gorest APIs using axios and async await",()=>{
    const baseurl="https://gorest.co.in/"
    const endpoint="public/v2/users"
    const endpoint1="public/v2/users/"
    const headers={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40",
        "Content-Type":"application/json"
    }
 
     randomname="Bhuvana"+(parseInt(Math.random()*1000))
     randomemail="bhuvana"+(Math.floor(Math.random()*1000))+"@gmail.com"
 
     const requestbody={
     "name":randomname,
     "gender":"female",
     "email":randomemail,
     "status":"active"
     }
 
     const updatebody=({
         "name":randomname,
         "gender":"female",
         "email":randomemail,
         "status":"inactive"
         })

         let ranId=""
it("Create a user",async()=>{
    const res=await axios.post(baseurl+endpoint,requestbody,{headers});
    expect(res.status).to.equal(201);
    expect(res.data).to.have.property("id");
    ranId=res.data.id;
    console.log(ranId);
    console.log(res);
})
it("Get the user",async()=>{
    const {res,error}=await axios.get(baseurl+endpoint1+ranId,{headers});
    expect(res.status).to.equal(200);
    expect(error).to.be.undefined;
})
it("Update user",async()=>{
    const res=await axios.put(baseurl+endpoint1+ranId,updatebody,{headers});
    expect(res.status).to.equal(200);
})
it("Delete the User",async()=>{
    const res=await axios.delete(baseurl+endpoint1+ranId,{headers});
    expect(res.status).to.equal(204);
})

})

describe("Gorest APIs using axios and promise",()=>{
    const baseurl="https://gorest.co.in/"
    const endpoint="public/v2/users"
    const endpoint1="public/v2/users/"
    const headers={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40",
        "Content-Type":"application/json"
    }
 
     randomname="Bhuvana"+(parseInt(Math.random()*1000))
     randomemail="bhuvana"+(Math.floor(Math.random()*1000))+"@gmail.com"
 
     const requestbody={
     "name":randomname,
     "gender":"female",
     "email":randomemail,
     "status":"active"
     }
 
     const updatebody=({
         "name":randomname,
         "gender":"female",
         "email":randomemail,
         "status":"inactive"
         })

         let ranId=""
it("Create a user",()=>{
    axios.post(baseurl+endpoint,requestbody,{headers})
    .then((res)=>{
    expect(res.status).to.be.equal(201);
    ranId=res.data.id;
    console.log(res);
    })
    // .catch((err)=>{
    //     console.log(err)
    // })

})   
it("Get the user",()=>{
    axios.get(baseurl+endpoint1+ranId,{headers})
    .then((res)=>{
        expect(res.status).to.be.equal(200);
        console.log(res);
    })
    // .catch((err)=>{
    // console.log(err)

    // })
}) 
it("Update the user",()=>{
    axios.put(baseurl+endpoint1+ranId,updatebody,{headers})
    .then((res)=>{
        expect(res.status).to.be.equal(200);
        console.log(res);
    })
})
it("Delete the user",()=>{
    axios.delete(baseurl+endpoint1+ranId,{headers})
    .then((res)=>{
        expect(res.status).to.be.equal(204);
        console.log(res);
    })
})
})
