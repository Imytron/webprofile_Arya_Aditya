let kucing = ["kucing putih", "kucing hitam", "kucing abu-abu", "kucing oren"]

for (kucing of kucing) {
    console.log(kucing);
    if(kucing === "kucing hitam"){
        console.log("kucing ini ada di list");
        break;
    }
    else
        console.log('tidak ada di list')
}