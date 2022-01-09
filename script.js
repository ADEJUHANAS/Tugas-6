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

}




