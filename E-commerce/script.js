// function abort(){
//     document.getElementById("body").style.display="none";
//     document.write("<h1>MANA KARA THA CLICK KARNE SE </h1>");
// }

// ------------------------------------
function details_div(){
    document.getElementById("temporary").style.display="inline";
}
function details_close(){
    document.getElementById("temporary").style.display="none";
}

var username=["pulkit26","muskan4946","somya4946","shiom26"]
var password=["pulkit","muskan","somya","shiom"]
var account_names=["Pulkit Sharma","Muskan Verma","Somya Verma","Shiom Shrivastava"]
function account_details(){
    var get_username=prompt("Enter the Username");
    var get_password=prompt("Enter the password");
    var counter=0;
    for(var i=0;i<=3;i++)
    {
        if(get_username==username[i] && get_password==password[i])
        {

            document.getElementById("account_name").innerHTML=account_names[i];
            window.alert("Welcome "+account_names[i])
        }
        else{
            counter++;
        }
    }
    if(counter==4)
    {
        window.alert("ENTER CORRECT DETAILS");
    }
}
var add_cart= () => {
    // window.alert("Added to cart successfully")
    document.getElementById("cart_box").style.display="block";
    document.getElementById("temporary").style.display="none";
}

