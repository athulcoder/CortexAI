
import { OpenAI } from "openai";


const client = new OpenAI({
    apiKey:"haha",
    baseURL:"http://localhost:12434/engines/v1"

})


const res = await client.chat.completions.create({
    model:"gemma3-qat:270M-F16",
    messages:[{role:"user",content:"Hi i am athul , how are you ?"}]
})


console.log("response :", res.choices[0].message.content);