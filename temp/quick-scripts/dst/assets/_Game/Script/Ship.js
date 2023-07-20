
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Ship.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adedd2JHO1FYqcUR+0zXeNA', 'Ship');
// _Game/Script/Ship.ts

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
var SoundManager_1 = require("./Manager/SoundManager");
var UIManager_1 = require("./Manager/UIManager");
var SimplePool_1 = require("./Pool/SimplePool");
var Utilities_1 = require("./Utilities");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletPoints_1 = [];
        _this.bulletPoints_2 = [];
        //list đạn bắn ra  
        _this.bulletPoints = [];
        _this.ripple = null;
        _this.shield = null;
        //giới hạn khu vực điều khiển
        _this.screen = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
        _this.isShooting = false;
        //------------------------------
        _this.timer = 0;
        return _this;
    }
    Ship.prototype.onLoad = function () {
        // this.player = cc.find('player');
        //set up move object
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.screen = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
        this.clampHorizon = new cc.Vec2(-0.5, 0.5).mul(this.screen.x);
        this.clampVertical = new cc.Vec2(-0.5, 0.5).mul(this.screen.y);
        this.bulletPoints = this.bulletPoints_1;
    };
    Ship.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    };
    //Move
    //bat dau an xuong
    Ship.prototype.onTouchBegan = function (event) {
        this.onStart();
        this.touchOffset = Utilities_1.default.vec3ToVec2(this.node.position).subtract(this.getMousePoint(event));
    };
    //di chuyen chuot
    Ship.prototype.onTouchMoved = function (event) {
        var newPos = this.getMousePoint(event).add(this.touchOffset);
        newPos.x = cc.misc.clampf(newPos.x, this.clampHorizon.x, this.clampHorizon.y);
        newPos.y = cc.misc.clampf(newPos.y, this.clampVertical.x, this.clampVertical.y);
        this.node.position = Utilities_1.default.vec2ToVec3(newPos);
    };
    //lay vi tri chuot bam xuong
    Ship.prototype.getMousePoint = function (event) {
        return event.getLocation().sub(cc.v2(this.screen.x * 0.5, this.screen.y * 0.5));
    };
    Ship.prototype.update = function (dt) {
        if (this.isShooting) {
            //mỗi 0.2s bắn 1 lần
            if (this.timer <= 0) {
                this.timer += 0.2;
                this.shoot();
            }
            this.timer -= dt;
        }
    };
    //bắn đạn
    Ship.prototype.shoot = function () {
        SoundManager_1.default.Ins.PlayClip(SoundManager_1.AudioType.FX_Bullet);
        for (var i = 0; i < this.bulletPoints.length; i++) {
            SimplePool_1.default.spawn(SimplePool_1.PoolType.Bullet_1, this.bulletPoints[i].getWorldPosition(), this.bulletPoints[i].angle).onInit(10);
        }
    };
    Ship.prototype.onPowerUp = function () {
        this.bulletPoints = this.bulletPoints_2;
        //this.shield.active = true;
        SoundManager_1.default.Ins.PlayClip(SoundManager_1.AudioType.FX_Booster);
    };
    Ship.prototype.onNextRound = function () {
        var _this = this;
        UIManager_1.default.Ins.onClose(1);
        this.node.setPosition(0, -1500, 0);
        this.moveTo(cc.Vec3.UP.mul(-500), 1, function () {
            //bật tut
            //bật fx
            _this.ripple.active = true;
        }, false);
    };
    Ship.prototype.onAwake = function () {
        var _this = this;
        this.moveTo(cc.Vec3.UP.mul(-500), 1, function () {
            //bật tut
            //bật fx
            _this.ripple.active = true;
            UIManager_1.default.Ins.onOpen(0);
        }, false);
    };
    //khi player bắt đầu ấn xuống
    Ship.prototype.onStart = function () {
        //bắt đầu bắn đạn
        if (!this.isShooting) {
            this.isShooting = true;
            //tắt tut
            //tắt fx
            this.ripple.active = false;
            UIManager_1.default.Ins.onClose(0);
        }
    };
    Ship.prototype.onFinish = function () {
        var _this = this;
        //tàu k bắn đạn nữa, vụt đi
        this.isShooting = false;
        this.moveTo(this.node.position.add(cc.Vec3.UP.mul(-200)), 1, function () { return _this.moveTo(_this.node.position.add(cc.Vec3.UP.mul(10000)), 1, 
        //show UI end card
        function () { return UIManager_1.default.Ins.onOpen(1); }, false); }, false);
        //this.waitAndExecute(()=>this.onNextRound());
    };
    // Hàm chờ 3 giây
    Ship.prototype.waitAndExecute = function (callback) {
        setTimeout(function () {
            callback(); // Gọi hàm callback sau khi chờ 3 giây
        }, 4000);
    };
    //hàm di chuyển sang vị trí mới
    Ship.prototype.moveTo = function (target, duration, doneAction, isWorldSpace) {
        // Lấy vị trí target position của node
        var targetPosition = isWorldSpace ? this.node.getLocalPosition(target) : target;
        // Tạo một tween để di chuyển node từ vị trí hiện tại đến vị trí mới (position)
        cc.tween(this.node)
            .to(duration, { position: targetPosition }, { easing: "linear", })
            .call(doneAction)
            .start();
    };
    __decorate([
        property({
            type: [cc.Node],
            tooltip: 'bulletPoints_1'
        })
    ], Ship.prototype, "bulletPoints_1", void 0);
    __decorate([
        property({
            type: [cc.Node],
            tooltip: 'bulletPoints_2'
        })
    ], Ship.prototype, "bulletPoints_2", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "ripple", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "shield", void 0);
    Ship = __decorate([
        ccclass
    ], Ship);
    return Ship;
}(cc.Component));
exports.default = Ship;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix1REFBaUU7QUFDakUsaURBQTRDO0FBQzVDLGdEQUF5RDtBQUN6RCx5Q0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFnTEM7UUF4S1Esb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFPL0Isb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFDdEMsbUJBQW1CO1FBQ1gsa0JBQVksR0FBZSxFQUFFLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBTS9CLDZCQUE2QjtRQUNyQixZQUFNLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFJL0YsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUE2Q3BDLGdDQUFnQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQWdHNUIsQ0FBQztJQTVJQyxxQkFBTSxHQUFOO1FBQ0UsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxD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QyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQixDQUFDO2dEQUVvQztJQUt0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ2E7SUF0QlosSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWdMeEI7SUFBRCxXQUFDO0NBaExELEFBZ0xDLENBaExpQyxFQUFFLENBQUMsU0FBUyxHQWdMN0M7a0JBaExvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9CdWxsZXRcIjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciwgeyBBdWRpb1R5cGUgfSBmcm9tIFwiLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvVUlNYW5hZ2VyXCI7XHJcbmltcG9ydCBTaW1wbGVQb29sLCB7IFBvb2xUeXBlIH0gZnJvbSBcIi4vUG9vbC9TaW1wbGVQb29sXCI7XHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICBAcHJvcGVydHkoe1xyXG4gICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgdG9vbHRpcDogJ2J1bGxldFBvaW50c18xJ1xyXG4gIH0pXHJcbiAgLy9saXN0IMSR4bqhbiBiYW4gxJHhuqd1XHJcbiAgcHVibGljIGJ1bGxldFBvaW50c18xOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KHtcclxuICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgIHRvb2x0aXA6ICdidWxsZXRQb2ludHNfMidcclxuICB9KVxyXG4gIC8vbGlzdCDEkeG6oW4gc2F1IGtoaSBsZXZlbCB1cFxyXG4gIHB1YmxpYyBidWxsZXRQb2ludHNfMjogY2MuTm9kZVtdID0gW107XHJcbiAgLy9saXN0IMSR4bqhbiBi4bqvbiByYSAgXHJcbiAgcHJpdmF0ZSBidWxsZXRQb2ludHMgOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHJpdmF0ZSByaXBwbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHByaXZhdGUgc2hpZWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIC8vIHByaXZhdGUgcGxheWVyOiBjYy5Ob2RlO1xyXG4gIHByaXZhdGUgdG91Y2hPZmZzZXQ6IGNjLlZlYzI7XHJcblxyXG4gIC8vZ2nhu5tpIGjhuqFuIGtodSB24buxYyDEkWnhu4F1IGtoaeG7g25cclxuICBwcml2YXRlIHNjcmVlbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aCwgY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCk7XHJcbiAgcHJpdmF0ZSBjbGFtcEhvcml6b246IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICBwcml2YXRlIGNsYW1wVmVydGljYWw6IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi55KTtcclxuICBcclxuICBwcml2YXRlIGlzU2hvb3Rpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy5wbGF5ZXIgPSBjYy5maW5kKCdwbGF5ZXInKTtcclxuICAgIC8vc2V0IHVwIG1vdmUgb2JqZWN0XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgY2MuVmVjMihjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGgsIGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xyXG4gICAgdGhpcy5jbGFtcEhvcml6b24gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICAgIHRoaXMuY2xhbXBWZXJ0aWNhbCA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLnkpO1xyXG5cclxuICAgIHRoaXMuYnVsbGV0UG9pbnRzID0gdGhpcy5idWxsZXRQb2ludHNfMTtcclxuICB9XHJcblxyXG4gIFxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy9Nb3ZlXHJcblxyXG4gIC8vYmF0IGRhdSBhbiB4dW9uZ1xyXG4gIHByaXZhdGUgb25Ub3VjaEJlZ2FuKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKS8qOiBib29sZWFuKi8ge1xyXG4gICAgdGhpcy5vblN0YXJ0KCk7XHJcbiAgICB0aGlzLnRvdWNoT2Zmc2V0ID0gVXRpbGl0aWVzLnZlYzNUb1ZlYzIodGhpcy5ub2RlLnBvc2l0aW9uKS5zdWJ0cmFjdCh0aGlzLmdldE1vdXNlUG9pbnQoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIC8vZGkgY2h1eWVuIGNodW90XHJcbiAgcHJpdmF0ZSBvblRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMuZ2V0TW91c2VQb2ludChldmVudCkuYWRkKHRoaXMudG91Y2hPZmZzZXQpO1xyXG5cclxuICAgIG5ld1Bvcy54ID0gY2MubWlzYy5jbGFtcGYobmV3UG9zLngsIHRoaXMuY2xhbXBIb3Jpem9uLngsIHRoaXMuY2xhbXBIb3Jpem9uLnkpO1xyXG4gICAgbmV3UG9zLnkgPSBjYy5taXNjLmNsYW1wZihuZXdQb3MueSwgdGhpcy5jbGFtcFZlcnRpY2FsLngsIHRoaXMuY2xhbXBWZXJ0aWNhbC55KTtcclxuICAgIFxyXG4gICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gVXRpbGl0aWVzLnZlYzJUb1ZlYzMobmV3UG9zKTtcclxuICB9XHJcblxyXG4gIC8vbGF5IHZpIHRyaSBjaHVvdCBiYW0geHVvbmdcclxuICBwcml2YXRlIGdldE1vdXNlUG9pbnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiBjYy5WZWMye1xyXG4gICAgcmV0dXJuIGV2ZW50LmdldExvY2F0aW9uKCkuc3ViKGNjLnYyKHRoaXMuc2NyZWVuLnggKiAwLjUsIHRoaXMuc2NyZWVuLnkgKiAwLjUpKTtcclxuICB9XHJcblxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiBcclxuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcpIHtcclxuICAgICAgLy9t4buXaSAwLjJzIGLhuq9uIDEgbOG6p25cclxuICAgICAgaWYgKHRoaXMudGltZXIgPD0gMCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gMC4yO1xyXG4gICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50aW1lciAtPSBkdDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvL2Lhuq9uIMSR4bqhblxyXG4gIHByaXZhdGUgc2hvb3QoKXtcclxuICAgIFNvdW5kTWFuYWdlci5JbnMuUGxheUNsaXAoQXVkaW9UeXBlLkZYX0J1bGxldCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnVsbGV0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIChTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLkJ1bGxldF8xLCAgdGhpcy5idWxsZXRQb2ludHNbaV0uZ2V0V29ybGRQb3NpdGlvbigpLHRoaXMuYnVsbGV0UG9pbnRzW2ldLmFuZ2xlKSBhcyBCdWxsZXQpLm9uSW5pdCgxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Qb3dlclVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5idWxsZXRQb2ludHMgPSB0aGlzLmJ1bGxldFBvaW50c18yO1xyXG4gICAgLy90aGlzLnNoaWVsZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgU291bmRNYW5hZ2VyLklucy5QbGF5Q2xpcChBdWRpb1R5cGUuRlhfQm9vc3Rlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25OZXh0Um91bmQoKXtcclxuICAgIFVJTWFuYWdlci5JbnMub25DbG9zZSgxKTtcclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLC0xNTAwLDApO1xyXG4gICAgdGhpcy5tb3ZlVG8oY2MuVmVjMy5VUC5tdWwoLTUwMCksIDEgLCBcclxuICAgICgpPT4ge1xyXG4gICAgICAvL2Lhuq10IHR1dFxyXG4gICAgICAvL2Lhuq10IGZ4XHJcbiAgICAgIHRoaXMucmlwcGxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9ICxmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Bd2FrZSgpIHtcclxuICAgIHRoaXMubW92ZVRvKGNjLlZlYzMuVVAubXVsKC01MDApLCAxICwgXHJcbiAgICAoKT0+IHtcclxuICAgICAgLy9i4bqtdCB0dXRcclxuICAgICAgLy9i4bqtdCBmeFxyXG4gICAgICB0aGlzLnJpcHBsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBVSU1hbmFnZXIuSW5zLm9uT3BlbigwKTtcclxuICAgIH0gLGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8va2hpIHBsYXllciBi4bqvdCDEkeG6p3Ug4bqlbiB4deG7kW5nXHJcbiAgcHVibGljIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAvL2Lhuq90IMSR4bqndSBi4bqvbiDEkeG6oW5cclxuICAgIGlmICghdGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XHJcbiAgICAgIC8vdOG6r3QgdHV0XHJcbiAgICAgIC8vdOG6r3QgZnhcclxuICAgICAgdGhpcy5yaXBwbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIFVJTWFuYWdlci5JbnMub25DbG9zZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZpbmlzaCgpOiB2b2lkIHtcclxuICAgIC8vdMOgdSBrIGLhuq9uIMSR4bqhbiBu4buvYSwgduG7pXQgxJFpXHJcbiAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubW92ZVRvKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwoLTIwMCkpLCAxICxcclxuICAgICgpPT4gIHRoaXMubW92ZVRvKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwoMTAwMDApKSwgMSAsXHJcbiAgICAvL3Nob3cgVUkgZW5kIGNhcmRcclxuICAgICgpPT4gVUlNYW5hZ2VyLklucy5vbk9wZW4oMSkgXHJcbiAgICAsZmFsc2UpXHJcbiAgICAsZmFsc2UpO1xyXG4gICAgLy90aGlzLndhaXRBbmRFeGVjdXRlKCgpPT50aGlzLm9uTmV4dFJvdW5kKCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gSMOgbSBjaOG7nSAzIGdpw6J5XHJcbiAgd2FpdEFuZEV4ZWN1dGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYWxsYmFjaygpOyAvLyBH4buNaSBow6BtIGNhbGxiYWNrIHNhdSBraGkgY2jhu50gMyBnacOieVxyXG4gICAgfSwgNDAwMCk7XHJcbiAgfVxyXG5cclxuICAvL2jDoG0gZGkgY2h1eeG7g24gc2FuZyB24buLIHRyw60gbeG7m2lcclxuICBwdWJsaWMgbW92ZVRvKHRhcmdldDogY2MuVmVjMywgZHVyYXRpb246IG51bWJlciwgZG9uZUFjdGlvbjogRnVuY3Rpb24sIGlzV29ybGRTcGFjZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gTOG6pXkgduG7iyB0csOtIHRhcmdldCBwb3NpdGlvbiBj4bunYSBub2RlXHJcbiAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGlzV29ybGRTcGFjZSA/IHRoaXMubm9kZS5nZXRMb2NhbFBvc2l0aW9uKHRhcmdldCkgOiB0YXJnZXQ7XHJcblxyXG4gICAgLy8gVOG6oW8gbeG7mXQgdHdlZW4gxJHhu4MgZGkgY2h1eeG7g24gbm9kZSB04burIHbhu4sgdHLDrSBoaeG7h24gdOG6oWkgxJHhur9uIHbhu4sgdHLDrSBt4bubaSAocG9zaXRpb24pXHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC50byhkdXJhdGlvbixcclxuICAgICAgICB7IHBvc2l0aW9uOiB0YXJnZXRQb3NpdGlvbiB9LFxyXG4gICAgICAgIHsgZWFzaW5nOiBcImxpbmVhclwiLCB9XHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoZG9uZUFjdGlvbilcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==