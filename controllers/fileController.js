const cloudinary = require('cloudinary').v2;
// Return "https" URLs by setting secure: true
cloudinary.config({
    api_key:"755683721392763",
    api_secret:"_68MF_J-kr0Z5Iw29XmSZmyxEFE",
    secure: true,
    cloud_name:"shubhamdixit78788"
  });
  

const fileUploadCloudinary=async (req,res)=>{
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  try {
    const result = await cloudinary.uploader.upload(req.files.file.path, options);
    ///console.log(result)
    res.json({
        message:"Success",
        data:result.url
    })

    
  } catch (error) {
    console.log(error);
  }

  
 

}

const fileUpload=(req,res)=>{
    console.log(req.body); // pass the users id
  ///  console.log(req.files);
    const uploadedFileName=req.files.file.path.split("/");
    let  fullUrl = req.protocol + '://' + req.get('host') ;
    res.json({
        message:"Success",
        data:`${fullUrl}/${uploadedFileName[uploadedFileName.length-1]}`
    })

  // You have to write logic to update the users image in the db 
  // Update query and update the imageName in the db or collections
  // $set:{image:fullUrl}

}


module.exports={
    fileUpload,
    fileUploadCloudinary
}