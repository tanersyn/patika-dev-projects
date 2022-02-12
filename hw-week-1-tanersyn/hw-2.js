Array.prototype.includesCI = function (variable) {
    return this.some((word) => word.toLowerCase() === variable.toLowerCase())
};

console.log(['kLm', 'Asd', 'deneme',"taner"].includesCI('TanEr'));
console.log(['asd', 'taner'].includesCI('abc'));
