const kota = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

const dataGanda = (result) => {
    return [... new Set(result)]
}
console.log(dataGanda(kota))