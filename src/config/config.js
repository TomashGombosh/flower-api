var config = module.exports;

const userRoles = config.userRoles = {
    guest: 1,       
    user: 2,        
    admin: 4,      
    superAdmin: 8   
}

config.accessLevels = {
    guest: userRoles.guest,
    user: userRoles.user,                    
    admin: userRoles.admin,                                    
    superAdmin: userRoles.superAdmin,                                                 
}