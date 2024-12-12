export const signup=async (req,res)=>{
    res.json({
        data:"You hit the signup endpoint"
    })
}

export const login=(req,res)=>{
    res.json({
        data:"you hit login endpoint",
        rando:"you hit the random endpoint"
    })
}

export const logout=async (req,res)=>{
    res.json({
        data:"you hit logout endpoint",
    })
}