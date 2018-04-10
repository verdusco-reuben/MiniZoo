webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addnew/addnew.component.css":
/***/ (function(module, exports) {

module.exports = "form{\n    width: 715px;\n    padding: 30px;\n    margin-left: 100px;\n}\n\ninput{\n    border-radius: 5px;\n}\n\nbutton{\n    margin: 10px;\n}\n\nspan{\n    color: #9854ff;\n}\n\nul{\n    list-style: none;\n}\n\n#left{\n    display: inline-block;\n    vertical-align: top;\n}\n\n#center{\n    margin-left: 50px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n#right{\n    margin-left: 50px;\n    display: inline-block;\n    vertical-align: top;\n}"

/***/ }),

/***/ "./src/app/addnew/addnew.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Know of a pet needing a home?</h3>\n<form (submit)=\"newPetForm()\" method=\"post\">\n  <div class=\"card\">\n    <div class=\"card-content\">\n      <div id=\"left\">\n        <p>Basic Info:</p>\n        <hr>\n        <p>Pet Name:</p>\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"newpet.name\" required minlength=3/>\n        <p>Pet type:</p>\n        <input type=\"text\" name=\"type\" [(ngModel)]=\"newpet.type\" />\n        <p>Description:</p>\n        <input type=\"text\" name=\"description\" [(ngModel)]=\"newpet.description\" />\n      </div>\n      <div id=\"center\">\n        <p>Skills:</p>\n        <hr>\n        <ul>\n          <li><p>Skill 1:</p><input type=\"text\" name=\"skills_1\" [(ngModel)]=\"newpet.skills_1\" /></li>\n          <li><p>Skill 2:</p><input type=\"text\" name=\"skills_2\" [(ngModel)]=\"newpet.skills_2\" /></li>\n          <li><p>Skill 3:</p><input type=\"text\" name=\"skills_3\" [(ngModel)]=\"newpet.skills_3\" /></li>\n        </ul>\n      </div>\n      <div id=\"right\">\n        <div *ngIf=\"errors\">\n          <div *ngFor=\"let x of errors\">\n            <span>{{x}}</span>\n          </div>\n        </div>\n        <br><br>\n        <button class=\"btn waves-effect waves-light\"  type=\"submit\">Add pet<i class=\"material-icons right\">send</i></button>  <button class=\"btn waves-effect waves-light\" [routerLink]=\"['/home']\">Cancel<i class=\"material-icons right\">cancel</i></button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/addnew/addnew.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AddnewComponent = /** @class */ (function () {
    function AddnewComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newpet = { name: "", type: "", description: "",
            skills_1: "", skills_2: "", skills_3: "" };
    }
    AddnewComponent.prototype.ngOnInit = function () {
    };
    AddnewComponent.prototype.newPetForm = function () {
        var _this = this;
        var observable = this._httpService.createOne(this.newpet);
        observable.subscribe(function (data) {
            if (data['error']) {
                console.log(data['error']);
                _this.errors = [];
                if (data['error']['errors']['description']) {
                    _this.errors.push(data['error']['errors']['description']['message']);
                }
                if (data['error']['errors']['name']) {
                    _this.errors.push(data['error']['errors']['name']['message']);
                }
                if (data['error']['errors']['type']) {
                    _this.errors.push(data['error']['errors']['type']['message']);
                }
                var test = _this._httpService.getByName(_this.newpet.name);
                test.subscribe(function (data) {
                    if (data['name']) {
                        _this.errors.push("ALREADY GOT THAT NAME, SORRY");
                    }
                });
            }
            else {
                _this._router.navigate(['home']);
            }
        });
    };
    AddnewComponent = __decorate([
        core_1.Component({
            selector: 'app-addnew',
            template: __webpack_require__("./src/app/addnew/addnew.component.html"),
            styles: [__webpack_require__("./src/app/addnew/addnew.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], AddnewComponent);
    return AddnewComponent;
}());
exports.AddnewComponent = AddnewComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var update_component_1 = __webpack_require__("./src/app/update/update.component.ts");
var addnew_component_1 = __webpack_require__("./src/app/addnew/addnew.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: 'edit/:id', component: update_component_1.UpdateComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'new', component: addnew_component_1.AddnewComponent },
    { path: 'details/:id', component: profile_component_1.ProfileComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#header{\n    padding: 20px;\n    background: rgb(148, 148, 148);\n    color: white;\n}\n#left{\n    display: inline-block;\n    vertical-align: top;\n    height: 755px;\n}\n#right{\n    display: inline-block;\n    vertical-align: top;\n    height: 755px;    \n}\nh6{\n    font-style: italic;\n    font-size: small;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 id=\"header\">Pet Shelter</h1>\n<h6>We take LITERALLY any animal worth saving!</h6>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var addnew_component_1 = __webpack_require__("./src/app/addnew/addnew.component.ts");
var update_component_1 = __webpack_require__("./src/app/update/update.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                addnew_component_1.AddnewComponent,
                update_component_1.UpdateComponent,
                profile_component_1.ProfileComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "img{\n    width: 300px;\n    height: 200px;\n}\ntable {\n    display: inline;\n    border-collapse: collapse;\n    border-spacing: 0;\n    text-align: left;\n    \n}\ntr:nth-child(odd) {\n    background-color: #d3d3d3;\n    border: 1px solid black;\n}\ntr:nth-child(even) {\n    background-color: #FFFFFF;\n    border: 1px solid black;\n}\nth {\n    padding: 10px;\n    color: white;\n    border-right: 1px solid black;\n}\ntd {\n    padding: 10px;\n    border-right: 1px solid black;\n}\np{\n    color: #9854ff\n}\n#edit{\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    color: white;\n    background: -webkit-gradient(linear,left top, left bottom,from(#e6d3be),to(#61737f));\n    background: linear-gradient(to bottom,#e6d3be,#61737f);\n    margin-left: 20px;\n}\n#details{\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    color: white;\n    background: -webkit-gradient(linear,left top, left bottom,from(#c7d6ea),to(#617482));\n    background: linear-gradient(to bottom,#c7d6ea,#617482);\n    margin-left: 10px;\n}\n#home-component{\n    margin-left: 100px;\n}\n#right{\n    margin-left: 50px;\n    vertical-align: top;\n    display: inline-block;\n}\n#addnew{\n    padding: 20px;\n    background: -webkit-gradient(linear,left top, left bottom,from(#cdf5cd),to(lightgreen));\n    background: linear-gradient(to bottom,#cdf5cd,lightgreen);\n    font-size: larger;\n}\nimg{\n    width: 375px;\n}\nh3{\n    font-style: italic;\n    text-decoration: underline;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<h3>These pets are looking for a home!!!</h3>\n<br>\n<section class=\"row\">\n  <div class=\"col l6\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <table>\n          <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Actions</th>\n          </tr>\n          <tr *ngFor=\"let x of all_pets\">\n            <td>{{x.name}}</td>\n            <td>{{x.type}}</td>\n            <td><button id=\"details\" [routerLink]=\"['/details',x._id]\">Details</button><button id=\"edit\" [routerLink]=\"['/edit',x._id]\">Edit</button></td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"col l5\">\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <img src={{dogpic}}>\n          <br>\n          <br>\n          <br>\n          <button id=\"addnew\" [routerLink]=\"['/new']\">Add a new pet to the shelter database!</button>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
        this.dogpic = "https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    HomeComponent.prototype.getAll = function () {
        var _this = this;
        var observable = this._httpService.getAll();
        observable.subscribe(function (data) {
            console.log(data);
            _this.all_pets = _this.sort(data);
            console.log(_this.all_pets);
        });
    };
    HomeComponent.prototype.sort = function (data) {
        for (var x = 0; x < data.length - 1; x++) {
            for (var i = 0; i < data.length - 1; i++) {
                if (data[x].type[0] < data[i].type[0]) {
                    var temp = data[x];
                    data[x] = data[i];
                    data[i] = temp;
                }
            }
        }
        for (var i = 0; i < data.length - 1; i++) {
            if (data[x].type[0] < data[i].type[0]) {
                var temp = data[x];
                data[x] = data[i];
                data[i] = temp;
            }
        }
        return data;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAll = function () {
        return this._http.get("/all");
    };
    HttpService.prototype.createOne = function (pet) {
        return this._http.post('/pet', pet);
    };
    HttpService.prototype.editOne = function (pet) {
        return this._http.put('/pet/' + pet._id, pet);
    };
    HttpService.prototype.deleteOne = function (id) {
        return this._http.delete('/pet/' + id);
    };
    HttpService.prototype.getOne = function (id) {
        return this._http.get("/pet/" + id);
    };
    HttpService.prototype.likeOne = function (id) {
        return this._http.get("/like/" + id);
    };
    HttpService.prototype.getByName = function (name) {
        console.log(name);
        return this._http.get("/name/" + name);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "span{\n    font-weight: bolder;\n}\na, h3{\n    display: inline-block;\n}\na{\n    text-align: right;\n    margin-left: 200px;\n}\n#right{\n    vertical-align: top;\n    display: inline-block;\n    width: 250px;\n}\n#left{\n    vertical-align: top;\n    display: inline-block;\n    width: 125px;\n    margin-right: 25px;\n    text-align: center;\n}\nul{\n    list-style: none;\n}\n#like{\n    padding: 10px;\n    margin-left: 20px;\n    color: white;\n    background: -webkit-gradient(linear,left top, left bottom,from(#c7d6ea),to(#617482));\n    background: linear-gradient(to bottom,#c7d6ea,#617482);\n}\n#adopt{\n    padding: 10px;\n    margin-left: 20px;\n    color: white;\n    background: -webkit-gradient(linear,left top, left bottom,from(#cde1cf),to(#445b69));\n    background: linear-gradient(to bottom,#cde1cf,#445b69);\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\n    <h3>Details about {{singlepet.name}}</h3>\n<a [routerLink]=\"['/home']\">Home</a>\n</div>\n<section class=\"row\">\n<div class=\"col l5\">\n        <div class=\"card\">\n        <div class=\"card-content\">\n                <div id=\"left\">\n                        <p><span>Pet Type: </span></p>\n                        <p><span>Description: </span></p>\n                        <p><span>Likes: </span></p>\n                        <p><span>Skills:</span></p>\n                </div>\n                <div id=\"right\">\n                        <p>{{singlepet.type}}</p>\n                        <p>{{singlepet.description}}</p>\n                        <p>{{singlepet.likes}}</p>\n                        <p>{{singlepet.skills[0]}}</p>\n                        <p>{{singlepet.skills[1]}}</p>\n                        <p>{{singlepet.skills[2]}}</p>\n                </div>\n                <br><br>\n                <br>\n                <button *ngIf=\"!already_clicked\" (click)=\"likeThisPet(singlepet._id)\" id=\"like\">Like this pet</button> \n                <button (click)=\"adoptMe(singlepet._id)\" id=\"adopt\">Adopt this pet!</button>\n        </div>\n        </div>\n</div>\n</section>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_route, _router, _HttpService) {
        this._route = _route;
        this._router = _router;
        this._HttpService = _HttpService;
        this.already_clicked = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.populatePage();
    };
    ProfileComponent.prototype.populatePage = function () {
        var _this = this;
        //get id from parameters
        this._route.params.subscribe(function (data) {
            console.log(data);
            _this.id = data['id'];
        });
        //get user from Http.Service
        var observable = this._HttpService.getOne(this.id);
        observable.subscribe(function (data) {
            _this.singlepet = data;
            console.log("got my singlepet!", _this.singlepet);
        });
    };
    ProfileComponent.prototype.likeThisPet = function (id) {
        var _this = this;
        var observable = this._HttpService.likeOne(this.id);
        observable.subscribe(function (data) {
            _this.singlepet = data;
            console.log("liked my singlepet!", _this.singlepet);
            _this.already_clicked = true;
            _this.populatePage();
        });
    };
    ProfileComponent.prototype.adoptMe = function (id) {
        var _this = this;
        var observable = this._HttpService.deleteOne(id);
        observable.subscribe(function (data) {
            console.log(data);
            _this._router.navigate(['/home']);
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            http_service_1.HttpService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/update/update.component.css":
/***/ (function(module, exports) {

module.exports = "\nform{\n    width: 715px;\n    padding: 30px;\n    margin-left: 100px;\n}\n\ninput{\n    border-radius: 5px;\n}\n\nbutton{\n    margin: 10px;\n}\n\nspan{\n    color: #9854ff;\n}\n\nul{\n    list-style: none;\n}\n\n#left{\n    display: inline-block;\n    vertical-align: top;\n}\n\n#center{\n    margin-left: 50px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n#right{\n    margin-left: 50px;\n    display: inline-block;\n    vertical-align: top;\n}"

/***/ }),

/***/ "./src/app/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Edit this {{pet.type}}</h3>\n\n<form (submit)=\"submitEdits()\" method=\"post\">\n    <div class=\"card\">\n        <div class=\"card-content\">\n  <div id=\"left\">\n    <p>Basic Info:</p>\n    <hr>\n    <p>Pet Name:</p><input type=\"text\" name=\"name\" [(ngModel)]=\"pet.name\" value=\"{{pet.name}}\" /><br>\n    <p>Pet type:</p><input type=\"text\" name=\"type\" [(ngModel)]=\"pet.type\" value=\"{{pet.type}}\" /><br>\n    <p>Description:</p><input type=\"text\" name=\"description\" [(ngModel)]=\"pet.description\" value=\"{{pet.description}}\" /><br>\n  </div>\n  <div id=\"center\">\n    <p>Skills:</p>\n    <hr>\n    <ul>\n      <li><p>Skill 1:</p><input type=\"text\" name=\"skills_1\" [(ngModel)]=\"pet.skills[0]\" value=\"{{pet.skills[0]}}\" /></li>\n      <li><p>Skill 2:</p><input type=\"text\" name=\"skills_2\" [(ngModel)]=\"pet.skills[1]\" value=\"{{pet.skills[1]}}\" /></li>\n      <li><p>Skill 3:</p><input type=\"text\" name=\"skills_3\" [(ngModel)]=\"pet.skills[2]\" value=\"{{pet.skills[2]}}\" /></li>\n    </ul>\n  </div>\n  <div id=\"right\"> \n    <div *ngIf=\"errors\">\n        <div *ngFor=\"let x of errors\">\n          <span>{{x}}</span>\n        </div>\n    </div>\n    <br>\n    <button class=\"btn waves-effect waves-light\" type=\"submit\">Edit Pet<i class=\"material-icons right\">send</i></button>\n      <button class=\"btn waves-effect waves-light\" [routerLink]=\"['/home']\">Cancel<i class=\"material-icons right\">cancel</i></button>\n  </div>\n  </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_route, _HttpService, _router) {
        this._route = _route;
        this._HttpService = _HttpService;
        this._router = _router;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.populateForm();
    };
    UpdateComponent.prototype.populateForm = function () {
        var _this = this;
        //get id from parameters
        this._route.params.subscribe(function (data) {
            console.log(data);
            _this.id = data['id'];
        });
        //get user from Http.Service
        var observable = this._HttpService.getOne(this.id);
        observable.subscribe(function (data) {
            _this.pet = data;
            console.log("got my pet!", _this.pet);
        });
    };
    UpdateComponent.prototype.submitEdits = function () {
        var _this = this;
        var observable = this._HttpService.editOne(this.pet);
        observable.subscribe(function (data) {
            if (data['error']) {
                _this.errors = [];
                if (data['error']['errors']['description']) {
                    _this.errors.push(data['error']['errors']['description']['message']);
                }
                if (data['error']['errors']['name']) {
                    _this.errors.push(data['error']['errors']['name']['message']);
                }
                if (data['error']['errors']['type']) {
                    _this.errors.push(data['error']['errors']['type']['message']);
                }
                var test = _this._HttpService.getByName(_this.pet.name);
                test.subscribe(function (data) {
                    if (data['name']) {
                        _this.errors.push("ALREADY GOT THAT NAME, SORRY");
                    }
                });
                console.log(_this.errors);
            }
            else {
                _this._router.navigate(['/home']);
            }
        });
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-update',
            template: __webpack_require__("./src/app/update/update.component.html"),
            styles: [__webpack_require__("./src/app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            http_service_1.HttpService,
            router_1.Router])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map