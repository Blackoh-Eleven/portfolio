
// export default function handler(req,res){
//     console.log('Api hit',req.method)
    
//     return res.status(200).json({ok:true});
// }

export default function handler(req, res) {
  console.log("🔥 TEST API HIT 🔥", req.method);

  res.status(200).json({
    ok: true,
    message: "test route working i"
  });
}

