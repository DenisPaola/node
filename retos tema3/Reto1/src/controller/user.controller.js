let user = null


function getStart (request, response){

    let respuesta = { ok:true, codigo: 200, message:'Recibido'}
    response.send(respuesta);
}

function getBye(request, response) {

    let respuesta = { ok:true, codigo: 200, message:'Adios!'}
    response.send(respuesta);
}

function getUser (request, response){

    let respuesta;
    
    if (user !=null){
        respuesta = {error:false, codigo:200, data:user};
    
    } else {
        respuesta= {ok:true, codigo:200, message:'Recibido'};
    }
    response.send(respuesta);
}

function getUserParams(request, response) {

    let respuesta;
    console.log(request.params)
    if (user != null) {
        respuesta = user;
    } else {
        respuesta = { ok: true, codigo: 200, message: 'Recibido' };
    }
    response.send(respuesta);
}

function postUser(request, response) {

    if (user === null) {
         user = { nombre: request.body.nombre, apellidos: request.body.apellidos };

        respuesta = { ok: true, codigo: 200, message: 'recibido',  };
    } else {
        respuesta = { error: false, codigo: 200, message: 'Usuario ya existe', data: usuario };
    }
    response.send(respuesta);
}

function putUser(request, response) {
    
    if (user != null) {
        user.nombre = request.body.nombre;
        user.apellidos = request.body.apellidos;

        respuesta = { error: false, codigo: 200, message: 'Usuario ya existe', data: usuario };
    } else {
        respuesta = { ok: true, codigo: 200, message: 'recibido' };
    }
    response.send(respuesta);
}

function deleteUser(request, response) {
    let respuesta;

    if (user != null) {

        respuesta = { error: false, codigo: 200, message: 'borrado', data: usuario };
    } else {
        respuesta = { ok:true, codigo: 200, message: 'recibido' };
    }
    response.send(respuesta);
}




module.exports = { getStart, getBye, getUser, getUserParams, postUser, putUser, deleteUser }