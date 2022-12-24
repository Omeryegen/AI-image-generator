const openAi = require('openai');
const Configuration = openAi.Configuration;
const OpenAIApi = openAi.OpenAIApi;
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const imageGen = async function  (req,res){
    const { prompt, size} = req.body;
    const imgSize = size === "small" ? "256x256" : size === "medium" ? "512x512" :  "1024x1024";
    try {

        const response = await openai.createImage({
            prompt,
            n: 2,
            size: imgSize,
          });
          
        const url = response.data.data[0].url;

        res.status(200).json({
            "success": "Successfully finished!",
            data: url
        });
    }catch (error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
         res.status(400).json({
            success: false,
            error: 'Resim oluşturulamadı.',
         });
    };
   
}

module.exports = {imageGen};