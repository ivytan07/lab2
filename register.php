<?php
    include_once("dbconnect.php");
     $name = $_POST["name"];
     $email = $_POST["email"];
     $gender = $_POST["gender"];
     $phonenumber = $_POST["phonenumber"];
     $dateofbirth = $_POST["dateofbirth"];
     $password = $_POST["password"];
     $confirmpassword = $_POST["confirmpassword"];
     $shapass = sha1($password);  
     $otp = rand(1000,9999);

     if (!(isset($name) || isset($email) || isset($gender) || isset($phonenumber) || isset($dateofbirth) || isset($password)|| isset($confirmpassword))){
         echo "<script>alert('Please fill in all required information')</script>";
         echo "<script>window.location.replace('../html/register.html')</script>";
     }
     else{
        $sqlregister = "INSERT INTO tbl_user(name,email,gender,phonenumber,dateofbirth,password,otp) VALUES('$name', '$email','$gender','$phonenumber', '$dateofbirth','$shapass','$otp')";
        $checkduplicate="SELECT * FROM tbl_user WHERE email='$email'";
		
        try{
            $conn->exec($sqlregister);
            echo "<script> alert('Registration successful')</script>";
            echo "<script> window.location.replace('../html/login.html')</script>";
        }catch(PDOException $e){
            echo "<script> alert('Registration failed')</script>";
            echo "<script> window.location.replace('../html/register.html')</script>";
        }
     }
?>