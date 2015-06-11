var url = "https://api.github.com/users";
   
  $.get(url, function(data){
    var siteAdminArr = data.map(function(obj){
  
      return obj.site_admin;
    });
    var adminCount = 0;
    siteAdminArr.forEach(function(current){
      if(current === true){
        adminCount++;
      }
    });
    
    var usrOrgArr = data.map(function(obj){
      
      return obj.type;
    });
    
    var userCount = 0;
    var orgCount = 0;
        usrOrgArr.forEach(function(current){
      if(current === "User"){
        userCount++;
      }else{
        orgCount++;
      }
    });
    
    var loginArr = data.map(function(obj){
      
      return obj.login;
    });
    
    var loginLessThan5 = 0;
    
    loginArr.forEach(function(current){
      if(current.length <= 5){
        loginLessThan5++;
      }
    });
    

     console.log('Listed objects of type User: ' + userCount); 
    console.log('Listed objects of type Organization: ' + orgCount);
    console.log('Number of admins: ' + adminCount);
   console.log('Users with github handle 5 characters or shorter: ' + loginLessThan5);


  });
