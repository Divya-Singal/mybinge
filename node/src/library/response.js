exports.Output = (status, msg, data)=> {

    let obj ={
        'status': status,
        'msg': msg,
        'val' : data || [],
    }
    return obj;
};