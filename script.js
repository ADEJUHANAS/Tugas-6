do{
var pilih = prompt ("masukkan pilihan"); 
switch (pilih){
    case '1':
        console.log ("if else");
        var nilai = prompt ("masukkan nilai 1 sampai 10");
        console.log (nilai);
        if (nilai > 5) {
            console.log ("lulus");
        
        } else{console.log ("tidak lulus")} 
        break;
        
        case '2':
            console.log ("Ternary Operator");
            var umur = prompt ("masukkan umur anda");
            var a = (umur > 17) ? "bisa buat SIM" : "tidak bisa buat SIM";
        console.log (a);
        break;

        case '3' :
            console.log ("for loop") ;
            for (var i = 0 ; i <10 ;i++ ) {
                console.log("nomor ",i );
            }
            break;

            case '4':
                let person = { 
                    firstName:"Ade",
                    lastName: "Juhanas",
                    id:1234,
                    alamat:"JL.Datuk Laksamana",
                    status:"Mahasiswa"   
                }
                for(let a in person){
                    console.log(a,":", person [a]);
                }
                break;

                case '5' :
                    var hewan = ["singa" , "Harimau" , "garuda" , "serigala"];
                    for(let b of hewan) {
                        console.log(b);
                    }
                    break;

                    case '6' :
                        var bilangan = prompt ("masukkan bilangan");
                        var i = "";
                        while(i < bilangan){
                            console.log("bilangan " , i);
                            i++;
                        }
                        break;

                        case '7' :
                        try{
                            document.write (kucing);

                        }
                        catch (error){
                            console.log(error);
                        }
                        break;
}

var ulang = confirm ("apakah ingin mengulang");
} while (ulang);

            