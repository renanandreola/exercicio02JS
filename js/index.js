var age = parseInt(prompt("Digite sua idade"));

if(age >= 65) {
  document.body.append("Você é idoso")
}else {
    if(age >= 18) {
    document.body.append("Você é maior de idade");
    }else {
        if(age <= 12) {
        document.body.append("Você é criança");
        }else {
        document.body.append("Você é adolescente")
        }
    }
}
