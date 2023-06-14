
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
        }, 3000);
    };
    //enemy death sẽ gọi vào hàm này
    //nếu ship chết thì cần viết 1 func khác để ship gọi vào
    LevelManager.prototype.onEnemyDeath = function (c) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcTGV2ZWxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxGLGlEQUEwRDtBQUMxRCxnQ0FBMkI7QUFFckIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFnSkM7UUFwSUUsc0NBQXNDO1FBRXRDLG9EQUFvRDtRQUc3QyxVQUFJLEdBQVMsSUFBSSxDQUFDO1FBR2xCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV2QixVQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV2QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBb0g3QixDQUFDO3FCQWhKb0IsWUFBWTtJQUk5QixzQkFBa0IsbUJBQUc7YUFBckI7WUFFRyxPQUFPLGNBQVksQ0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFUyw2QkFBTSxHQUFoQjtRQUNHLGNBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFtQlMsNEJBQUssR0FBZjtRQUNHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR00sb0NBQWEsR0FBcEI7UUFDRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFB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LENBaEp5QyxFQUFFLENBQUMsU0FBUyxHQWdKckQ7a0JBaEpvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi4vQ2hhcmFjdGVyXCI7XHJcbmltcG9ydCBFbmVteSBmcm9tIFwiLi4vRW5lbXlcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi4vUG9vbC9TaW1wbGVQb29sXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9TaGlwXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAvLyBzaW5nbGV0b25cclxuICAgcHJpdmF0ZSBzdGF0aWMgaW5zIDogTGV2ZWxNYW5hZ2VyO1xyXG4gICBwdWJsaWMgc3RhdGljIGdldCBJbnMoKSA6IExldmVsTWFuYWdlclxyXG4gICB7XHJcbiAgICAgIHJldHVybiBMZXZlbE1hbmFnZXIuaW5zO1xyXG4gICB9XHJcblxyXG4gICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICBMZXZlbE1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgfVxyXG4gICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgLy9MZXZlbCBNYW5hZ2VyIHPhur0gxJFp4buBdSBraGnhu4NuIGx14buTbmcgY2jDrW5oIHRyb25nIGdhbWVcclxuXHJcbiAgIEBwcm9wZXJ0eShTaGlwKVxyXG4gICBwdWJsaWMgc2hpcDogU2hpcCA9IG51bGw7XHJcbiAgIFxyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgcHVibGljIHN0YWdlXzE6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICBcclxuICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgIHB1YmxpYyBzdGFnZV8yOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgIHByaXZhdGUgbGlzdDogQ2hhcmFjdGVyW10gPSBbXTtcclxuICAgcHJpdmF0ZSBpc0Jvb3N0ZXI6IGJvb2xlYW47XHJcbiAgIHByaXZhdGUgc3RhZ2U6IG51bWJlciA9IDA7XHJcbiAgIHByaXZhdGUgbGV2ZWw6IG51bWJlciA9IDE7XHJcblxyXG4gICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMub25Mb2FkU3RhZ2VfMSgpO1xyXG4gICAgICB0aGlzLmlzQm9vc3RlciA9IGZhbHNlO1xyXG4gICAgICAvL2RpIGNodXnhu4NuIHTDoHUgbMOqbiB4b25nIMSR4bujaSAgbmfGsOG7nWkgY2jGoWkgxJFp4buBdSBraGnhu4NuXHJcbiAgICAgIHRoaXMuc2hpcC5vbkF3YWtlKCk7XHJcbiAgIH1cclxuXHJcblxyXG4gICBwdWJsaWMgb25Mb2FkU3RhZ2VfMSgpOiB2b2lkIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YWdlXzEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IGUgPSBTaW1wbGVQb29sLnNwYXduVDxFbmVteT4oUG9vbFR5cGUuRW5lbXlfMSwgdGhpcy5zdGFnZV8xW2ldLmdldFdvcmxkUG9zaXRpb24oKS5hZGQoY2MuVmVjMy5VUC5tdWwoMTAwMCkpLCAwKTtcclxuICAgICAgICAgZS5tb3ZlVG8odGhpcy5zdGFnZV8xW2ldLmdldFdvcmxkUG9zaXRpb24oKSwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgIHRoaXMubGlzdC5wdXNoKGUpO1xyXG4gICAgICAgICBlLm9uSW5pdCg0MCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcHVibGljIG9uTG9hZFN0YWdlXzIoKTogdm9pZCB7XHJcbiAgICAgIC8vYmF5IHThu6sgMiBiw6puIHNhbmdcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBlID0gU2ltcGxlUG9vbC5zcGF3blQ8RW5lbXk+KFBvb2xUeXBlLkVuZW15XzIsIHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCkuYWRkKG5ldyBjYy5WZWMzKC0xMDAwLDAsMCkpLCAwKTtcclxuICAgICAgICAgZS5tb3ZlVG8odGhpcy5zdGFnZV8yW2ldLmdldFdvcmxkUG9zaXRpb24oKSwgMC41LCB0cnVlKTtcclxuICAgICAgICAgdGhpcy5saXN0LnB1c2goZSk7XHJcbiAgICAgICAgIGUub25Jbml0KDQwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDEzOyBpIDwgdGhpcy5zdGFnZV8yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBlID0gU2ltcGxlUG9vbC5zcGF3blQ8RW5lbXk+KFBvb2xUeXBlLkVuZW15XzIsIHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCkuYWRkKG5ldyBjYy5WZWMzKDEwMDAsMCwwKSksIDApO1xyXG4gICAgICAgICBlLm1vdmVUbyh0aGlzLnN0YWdlXzJbaV0uZ2V0V29ybGRQb3NpdGlvbigpLCAwLjUsIHRydWUpO1xyXG4gICAgICAgICB0aGlzLmxpc3QucHVzaChlKTtcclxuICAgICAgICAgZS5vbkluaXQoNDApO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvbkxvYWRTdGFnZV8yXzEoKTogdm9pZCB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGFnZV8xLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBlID0gU2ltcGxlUG9vbC5zcGF3blQ8RW5lbXk+KFBvb2xUeXBlLkVuZW15XzIsIHRoaXMuc3RhZ2VfMVtpXS5nZXRXb3JsZFBvc2l0aW9uKCkuYWRkKGNjLlZlYzMuVVAubXVsKDEwMDApKSwgMCk7XHJcbiAgICAgICAgIGUubW92ZVRvKHRoaXMuc3RhZ2VfMVtpXS5nZXRXb3JsZFBvc2l0aW9uKCksIDEsIHRydWUpO1xyXG4gICAgICAgICB0aGlzLmxpc3QucHVzaChlKTtcclxuICAgICAgICAgZS5vbkluaXQoNDApO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIG9uRmluaXNoKCkge1xyXG4gICAgICAvL2vhur90IHRow7pjIG3DoG4gZ2FtZSBkaSBjaHV54buDbiB0w6B1IGzDqm4gdGjhurNuZyBwaMOtYSB0csOqblxyXG4gICAgICB0aGlzLnNoaXAub25GaW5pc2goKTtcclxuICAgICAgdGhpcy5zdGFnZSsrO1xyXG4gICAgICAvL3Nob3cgVUkgZW5kIGNhcmRcclxuICAgfVxyXG5cclxuICAgXHJcbiAgIC8vIEjDoG0gY2jhu50gMyBnacOieVxyXG4gICB3YWl0QW5kRXhlY3V0ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTsgLy8gR+G7jWkgaMOgbSBjYWxsYmFjayBzYXUga2hpIGNo4budIDMgZ2nDonlcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgIH1cclxuXHJcbiAgIC8vZW5lbXkgZGVhdGggc+G6vSBn4buNaSB2w6BvIGjDoG0gbsOgeVxyXG4gICAvL27hur91IHNoaXAgY2jhur90IHRow6wgY+G6p24gdmnhur90IDEgZnVuYyBraMOhYyDEkeG7gyBzaGlwIGfhu41pIHbDoG9cclxuICAgcHVibGljIG9uRW5lbXlEZWF0aChjOiBDaGFyYWN0ZXIpOiB2b2lke1xyXG5cclxuICAgICAgLy9yZW1vdmUgZW5lbXkgcmEga2jhu49pIGxpc3RcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5saXN0LmluZGV4T2YoYyk7XHJcbiAgICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9u4bq/dSBr4bq/dCB0aMO6YyBzdGFnZSB0aMOsIG5leHQgc3RhZ2VcclxuICAgICAgaWYodGhpcy5saXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgdGhpcy5zdGFnZSsrO1xyXG4gICAgICAgICBpZih0aGlzLnN0YWdlID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsKys7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPTA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgc3dpdGNoKHRoaXMubGV2ZWwpe1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLnN0YWdlKXtcclxuICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZFN0YWdlXzEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkxvYWRTdGFnZV8yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAvL2vhur90IHRow7pjIHN0YWdlIHRow6wga+G6v3QgdGjDumMgZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGF0ZTogJHt0aGlzLnN0YWdlfTsgbGV2ZWxcIiAke3RoaXMubGV2ZWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuc3RhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkU3RhZ2VfMl8xKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5vbkxvYWRTdGFnZV8yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAvL2vhur90IHRow7pjIHN0YWdlIHRow6wga+G6v3QgdGjDumMgZ2FtZVxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vZW5lbXkgxJHhuqd1IHRpw6puIGNo4bq/dCBz4bq9IHThuqFvIGJvb3N0ZXIgcmFcclxuICAgICAgaWYoIXRoaXMuaXNCb29zdGVyKXtcclxuICAgICAgICAgdGhpcy5pc0Jvb3N0ZXIgPSB0cnVlO1xyXG4gICAgICAgICBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLkJvb3N0ZXIsIGMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbn1cclxuIl19