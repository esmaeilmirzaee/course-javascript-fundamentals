function Vehicle(name, model, owner, productionYear) {
    this.name = name;
    this.model = model;
    this.owner = owner;
    this.yearsOfUsage = function() {
        return new Date().getUTCFullYear() - new Date(productionYear).getUTCFullYear();
    };
}
