
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Manager/LevelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dafbF1IDRAvbIoBVoZ+QEg', 'LevelManager');
// _Game/Script/Manager/LevelManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimplePool_1 = require("../Pool/SimplePool");
var Ship_1 = require("../Ship");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelManager = /** @class */ (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //------------------------------------
        //Level Manager sẽ điều khiển luồng chính trong game
        _this.ship = null;
        _this.stage_1 = [];
        _this.stage_2 = [];
        _this.list = [];
        _this.stage = 0;
        _this.level = 1;
        return _this;
    }
    LevelManager_1 = LevelManager;
    Object.defineProperty(LevelManager, "Ins", {
        get: function () {
            return LevelManager_1.ins;
        },
        enumerable: false,
        configurable: true
    });
    LevelManager.prototype.onLoad = function () {
        LevelManager_1.ins = this;
    };
    LevelManager.prototype.start = function () {
        this.onLoadStage_1();
        this.isBooster = false;
        //di chuyển tàu lên xong đợi  người chơi điều khiển
        this.ship.onAwake();
    };
    LevelManager.prototype.onLoadStage_1 = function () {
        for (var i = 0; i < this.stage_1.length; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_1, this.stage_1[i].getWorldPosition().add(cc.Vec3.UP.mul(1000)), 0);
            e.moveTo(this.stage_1[i].getWorldPosition(), 1, true);
            this.list.push(e);
            e.onInit(40);
        }
    };
    LevelManager.prototype.onLoadStage_2 = function () {
        //bay từ 2 bên sang
        for (var i = 0; i < 14; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_2, this.node.getWorldPosition().add(new cc.Vec3(-1000, 0, 0)), 0);
            e.moveTo(this.stage_2[i].getWorldPosition(), 0.5, true);
            this.list.push(e);
            e.onInit(40);
        }
        for (var i = 13; i < this.stage_2.length; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_2, this.node.getWorldPosition().add(new cc.Vec3(1000, 0, 0)), 0);
            e.moveTo(this.stage_2[i].getWorldPosition(), 0.5, true);
            this.list.push(e);
            e.onInit(40);
        }
    };
    LevelManager.prototype.onLoadStage_2_1 = function () {
        for (var i = 0; i < this.stage_1.length; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_2, this.stage_1[i].getWorldPosition().add(cc.Vec3.UP.mul(1000)), 0);
            e.moveTo(this.stage_1[i].getWorldPosition(), 1, true);
            this.list.push(e);
            e.onInit(40);
        }
    };
    LevelManager.prototype.onFinish = function () {
        //kết thúc màn game di chuyển tàu lên thẳng phía trên
        this.ship.onFinish();
        this.stage++;
        //show UI end card
    };
    // Hàm chờ 3 giây
    LevelManager.prototype.waitAndExecute = function (callback) {
        setTimeout(function () {
            callback(); // Gọi hàm callback sau khi chờ 3 giây
        }, 5000);
    };
    //enemy death sẽ gọi vào hàm này
    //nếu ship chết thì cần viết 1 func khác để ship gọi vào
    LevelManager.prototype.onEnemyDeath = function (c) {
        var _this = this;
        //remove enemy ra khỏi list
        var index = this.list.indexOf(c);
        if (index != -1) {
            this.list.splice(index, 1);
        }
        //nếu kết thúc stage thì next stage
        if (this.list.length == 0) {
            this.stage++;
            if (this.stage == 3) {
                this.level++;
                this.stage = 0;
            }
            switch (this.level) {
                case 1:
                    switch (this.stage) {
                        case 0:
                            this.onLoadStage_1();
                            break;
                        case 1:
                            this.onLoadStage_2();
                            break;
                        default:
                            //kết thúc stage thì kết thúc game
                            this.onFinish();
                            this.waitAndExecute(function () { return _this.onLoadStage_2_1(); });
                            console.log("state: " + this.stage + "; level\" " + this.level);
                            break;
                    }
                case 2:
                    switch (this.stage) {
                        case 0:
                            this.onLoadStage_2_1();
                            break;
                        case 1:
                            //this.onLoadStage_2();
                            break;
                        default:
                            //kết thúc stage thì kết thúc game
                            this.onFinish();
                            break;
                    }
            }
        }
        //enemy đầu tiên chết sẽ tạo booster ra
        if (!this.isBooster) {
            this.isBooster = true;
            SimplePool_1.default.spawn(SimplePool_1.PoolType.Booster, c.node.getWorldPosition());
        }
    };
    var LevelManager_1;
    __decorate([
        property(Ship_1.default)
    ], LevelManager.prototype, "ship", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "stage_1", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "stage_2", void 0);
    LevelManager = LevelManager_1 = __decorate([
        ccclass
    ], LevelManager);
    return LevelManager;
}(cc.Component));
exports.default = LevelManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcTGV2ZWxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxGLGlEQUEwRDtBQUMxRCxnQ0FBMkI7QUFFckIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpSkM7UUFySUUsc0NBQXNDO1FBRXRDLG9EQUFvRDtRQUc3QyxVQUFJLEdBQVMsSUFBSSxDQUFDO1FBR2xCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV2QixVQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV2QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBcUg3QixDQUFDO3FCQWpKb0IsWUFBWTtJQUk5QixzQkFBa0IsbUJBQUc7YUFBckI7WUFFRyxPQUFPLGNBQVksQ0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFUyw2QkFBTSxHQUFoQjtRQUNHLGNBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFtQlMsNEJBQUssR0FBZjtRQUNHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR00sb0NBQWEsR0FBcEI7UUFDRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFB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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNhO0lBdkJiLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FpSmhDO0lBQUQsbUJBQUM7Q0FqSkQsQUFpSkMsQ0FqSnlDLEVBQUUsQ0FBQyxTQUFTLEdBaUpyRDtrQkFqSm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuLi9DaGFyYWN0ZXJcIjtcclxuaW1wb3J0IEVuZW15IGZyb20gXCIuLi9FbmVteVwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCwgeyBQb29sVHlwZSB9IGZyb20gXCIuLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL1NoaXBcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIC8vIHNpbmdsZXRvblxyXG4gICBwcml2YXRlIHN0YXRpYyBpbnMgOiBMZXZlbE1hbmFnZXI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgZ2V0IElucygpIDogTGV2ZWxNYW5hZ2VyXHJcbiAgIHtcclxuICAgICAgcmV0dXJuIExldmVsTWFuYWdlci5pbnM7XHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgIExldmVsTWFuYWdlci5pbnMgPSB0aGlzO1xyXG4gICB9XHJcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAvL0xldmVsIE1hbmFnZXIgc+G6vSDEkWnhu4F1IGtoaeG7g24gbHXhu5NuZyBjaMOtbmggdHJvbmcgZ2FtZVxyXG5cclxuICAgQHByb3BlcnR5KFNoaXApXHJcbiAgIHB1YmxpYyBzaGlwOiBTaGlwID0gbnVsbDtcclxuICAgXHJcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICBwdWJsaWMgc3RhZ2VfMTogY2MuTm9kZVtdID0gW107XHJcbiAgIFxyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgcHVibGljIHN0YWdlXzI6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgcHJpdmF0ZSBsaXN0OiBDaGFyYWN0ZXJbXSA9IFtdO1xyXG4gICBwcml2YXRlIGlzQm9vc3RlcjogYm9vbGVhbjtcclxuICAgcHJpdmF0ZSBzdGFnZTogbnVtYmVyID0gMDtcclxuICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5vbkxvYWRTdGFnZV8xKCk7XHJcbiAgICAgIHRoaXMuaXNCb29zdGVyID0gZmFsc2U7XHJcbiAgICAgIC8vZGkgY2h1eeG7g24gdMOgdSBsw6puIHhvbmcgxJHhu6NpICBuZ8aw4budaSBjaMahaSDEkWnhu4F1IGtoaeG7g25cclxuICAgICAgdGhpcy5zaGlwLm9uQXdha2UoKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIHB1YmxpYyBvbkxvYWRTdGFnZV8xKCk6IHZvaWQge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhZ2VfMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgZSA9IFNpbXBsZVBvb2wuc3Bhd25UPEVuZW15PihQb29sVHlwZS5FbmVteV8xLCB0aGlzLnN0YWdlXzFbaV0uZ2V0V29ybGRQb3NpdGlvbigpLmFkZChjYy5WZWMzLlVQLm11bCgxMDAwKSksIDApO1xyXG4gICAgICAgICBlLm1vdmVUbyh0aGlzLnN0YWdlXzFbaV0uZ2V0V29ybGRQb3NpdGlvbigpLCAxLCB0cnVlKTtcclxuICAgICAgICAgdGhpcy5saXN0LnB1c2goZSk7XHJcbiAgICAgICAgIGUub25Jbml0KDQwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb25Mb2FkU3RhZ2VfMigpOiB2b2lkIHtcclxuICAgICAgLy9iYXkgdOG7qyAyIGLDqm4gc2FuZ1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE0OyBpKyspIHtcclxuICAgICAgICAgbGV0IGUgPSBTaW1wbGVQb29sLnNwYXduVDxFbmVteT4oUG9vbFR5cGUuRW5lbXlfMiwgdGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKS5hZGQobmV3IGNjLlZlYzMoLTEwMDAsMCwwKSksIDApO1xyXG4gICAgICAgICBlLm1vdmVUbyh0aGlzLnN0YWdlXzJbaV0uZ2V0V29ybGRQb3NpdGlvbigpLCAwLjUsIHRydWUpO1xyXG4gICAgICAgICB0aGlzLmxpc3QucHVzaChlKTtcclxuICAgICAgICAgZS5vbkluaXQoNDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMTM7IGkgPCB0aGlzLnN0YWdlXzIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IGUgPSBTaW1wbGVQb29sLnNwYXduVDxFbmVteT4oUG9vbFR5cGUuRW5lbXlfMiwgdGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKS5hZGQobmV3IGNjLlZlYzMoMTAwMCwwLDApKSwgMCk7XHJcbiAgICAgICAgIGUubW92ZVRvKHRoaXMuc3RhZ2VfMltpXS5nZXRXb3JsZFBvc2l0aW9uKCksIDAuNSwgdHJ1ZSk7XHJcbiAgICAgICAgIHRoaXMubGlzdC5wdXNoKGUpO1xyXG4gICAgICAgICBlLm9uSW5pdCg0MCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIG9uTG9hZFN0YWdlXzJfMSgpOiB2b2lkIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YWdlXzEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IGUgPSBTaW1wbGVQb29sLnNwYXduVDxFbmVteT4oUG9vbFR5cGUuRW5lbXlfMiwgdGhpcy5zdGFnZV8xW2ldLmdldFdvcmxkUG9zaXRpb24oKS5hZGQoY2MuVmVjMy5VUC5tdWwoMTAwMCkpLCAwKTtcclxuICAgICAgICAgZS5tb3ZlVG8odGhpcy5zdGFnZV8xW2ldLmdldFdvcmxkUG9zaXRpb24oKSwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgIHRoaXMubGlzdC5wdXNoKGUpO1xyXG4gICAgICAgICBlLm9uSW5pdCg0MCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgb25GaW5pc2goKSB7XHJcbiAgICAgIC8va+G6v3QgdGjDumMgbcOgbiBnYW1lIGRpIGNodXnhu4NuIHTDoHUgbMOqbiB0aOG6s25nIHBow61hIHRyw6puXHJcbiAgICAgIHRoaXMuc2hpcC5vbkZpbmlzaCgpO1xyXG4gICAgICB0aGlzLnN0YWdlKys7XHJcbiAgICAgIC8vc2hvdyBVSSBlbmQgY2FyZFxyXG4gICB9XHJcblxyXG4gICBcclxuICAgLy8gSMOgbSBjaOG7nSAzIGdpw6J5XHJcbiAgIHdhaXRBbmRFeGVjdXRlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjaygpOyAvLyBH4buNaSBow6BtIGNhbGxiYWNrIHNhdSBraGkgY2jhu50gMyBnacOieVxyXG4gICAgICB9LCA1MDAwKTtcclxuICAgfVxyXG5cclxuICAgLy9lbmVteSBkZWF0aCBz4bq9IGfhu41pIHbDoG8gaMOgbSBuw6B5XHJcbiAgIC8vbuG6v3Ugc2hpcCBjaOG6v3QgdGjDrCBj4bqnbiB2aeG6v3QgMSBmdW5jIGtow6FjIMSR4buDIHNoaXAgZ+G7jWkgdsOgb1xyXG4gICBwdWJsaWMgb25FbmVteURlYXRoKGM6IENoYXJhY3Rlcik6IHZvaWR7XHJcblxyXG4gICAgICAvL3JlbW92ZSBlbmVteSByYSBraOG7j2kgbGlzdFxyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmxpc3QuaW5kZXhPZihjKTtcclxuICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL27hur91IGvhur90IHRow7pjIHN0YWdlIHRow6wgbmV4dCBzdGFnZVxyXG4gICAgICBpZih0aGlzLmxpc3QubGVuZ3RoID09IDApe1xyXG4gICAgICAgICB0aGlzLnN0YWdlKys7XHJcbiAgICAgICAgIGlmKHRoaXMuc3RhZ2UgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwrKztcclxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9MDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBzd2l0Y2godGhpcy5sZXZlbCl7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuc3RhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkU3RhZ2VfMSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZFN0YWdlXzIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgIC8va+G6v3QgdGjDumMgc3RhZ2UgdGjDrCBr4bq/dCB0aMO6YyBnYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWl0QW5kRXhlY3V0ZSgoKT0+dGhpcy5vbkxvYWRTdGFnZV8yXzEoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGF0ZTogJHt0aGlzLnN0YWdlfTsgbGV2ZWxcIiAke3RoaXMubGV2ZWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuc3RhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkU3RhZ2VfMl8xKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5vbkxvYWRTdGFnZV8yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAvL2vhur90IHRow7pjIHN0YWdlIHRow6wga+G6v3QgdGjDumMgZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vZW5lbXkgxJHhuqd1IHRpw6puIGNo4bq/dCBz4bq9IHThuqFvIGJvb3N0ZXIgcmFcclxuICAgICAgaWYoIXRoaXMuaXNCb29zdGVyKXtcclxuICAgICAgICAgdGhpcy5pc0Jvb3N0ZXIgPSB0cnVlO1xyXG4gICAgICAgICBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLkJvb3N0ZXIsIGMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbn1cclxuIl19