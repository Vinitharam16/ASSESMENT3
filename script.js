function createlabel(tagname,attributename,attributevalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attributename,attributevalue);
    ele.innerHTML=content;
    return ele;
    }
    function inputele(tagname,attributename,attributevalue,attributename1,attributevalue1){
    var inputele = document.createElement(tagname)
    inputele.setAttribute(attributename,attributevalue);
    inputele.setAttribute(attributename1,attributevalue1);
    return inputele;
    }
    function br(tagname){
    var res = document.createElement(tagname);
    return res
    }
    var firstname = createlabel("label","for","firstname","FirstName");
    var br1 = br("br");
    var firstinput = inputele("input","type","text","id","firstname");
    var br2 = br("br");
    var middlename = createlabel("label","for","middlename","MiddleName");
    var br3 = br("br");
    var middleinput = inputele("input","type","text","id","middlename");
    var br4 = br("br");
    var lastname = createlabel("label","for","lastname","LastName");
    var br5 = br("br");
    var lastinput = inputele("input","type","text","id","lastname");
    var br6 = br("br");
    var email = createlabel("label","for","email","Email");
    var br7 = br("br");
    var input = inputele("input","type","email","id","email");
    var br8 = br("br");
    var pincode = createlabel("label","for","pincode","Pincode");
    var br9 = br("br");
    var inputpin = inputele("input","type","number","id","pincode");
    var br10 = br("br");
    document.body.append(firstname,br1,firstinput,br2,middlename,br3,middleinput,br4,lastname,br5,lastinput,br6,email,br7,input,br8,pincode,br9,inputpin,br10);