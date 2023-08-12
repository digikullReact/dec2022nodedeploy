const chai=require("chai");
const chaiHttp=require("chai-http");

const app=require("../../app");

chai.use(chaiHttp);

describe("Test Root router ,main route",function(){
    describe(" Root route test ,/",function(){
        it("should return hi there",function(done){
            chai.request(app)
            .get("/")
            .end((err,res)=>{
                console.log(res.body);
                chai.assert.equal(res.body,"hi there")
                done();
            })

        })

    })


})