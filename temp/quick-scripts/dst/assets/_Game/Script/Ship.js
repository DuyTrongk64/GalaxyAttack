
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
        this.shield.active = true;
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
        this.waitAndExecute(function () { return _this.onNextRound(); });
    };
    // Hàm chờ 3 giây
    Ship.prototype.waitAndExecute = function (callback) {
        setTimeout(function () {
            callback(); // Gọi hàm callback sau khi chờ 3 giây
        }, 3000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix1REFBaUU7QUFDakUsaURBQTRDO0FBQzVDLGdEQUF5RDtBQUN6RCx5Q0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFnTEM7UUF4S1Esb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFPL0Isb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFDdEMsbUJBQW1CO1FBQ1gsa0JBQVksR0FBZSxFQUFFLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBTS9CLDZCQUE2QjtRQUNyQixZQUFNLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFJL0YsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUE2Q3BDLGdDQUFnQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQWdHNUIsQ0FBQztJQTVJQyxxQkFBTSxHQUFOO1FBQ0UsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMxQyxDQUFDO0lBR0Qsd0JBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxNQUFNO0lBRU4sa0JBQWtCO0lBQ1YsMkJBQVksR0FBcEIsVUFBcUIsS0FBMEI7UUFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELGlCQUFpQjtJQUNULDJCQUFZLEdBQXBCLFVBQXFCLEtBQTBCO1FBQzdDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvRCxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNEJBQTRCO0lBQ3BCLDRCQUFhLEdBQXJCLFVBQXNCLEtBQTBCO1FBQzlDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFNRCxxQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUVmLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixvQkFBb0I7WUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7U0FDbEI7SUFFSCxDQUFDO0lBRUQsU0FBUztJQUNELG9CQUFLLEdBQWI7UUFDRSxzQkFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsd0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsb0JBQVUsQ0FBQyxLQUFLLENBQUMscUJBQVEsQ0FBQyxRQUFRLEVBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pJO0lBQ0gsQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsd0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sMEJBQVcsR0FBbEI7UUFBQSxpQkFTQztRQVJDLG1CQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQ25DO1lBQ0UsU0FBUztZQUNULFFBQVE7WUFDUixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUNuQztZQUNFLFNBQVM7WUFDVCxRQUFRO1lBQ1IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzFCLG1CQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsNkJBQTZCO0lBQ3RCLHNCQUFPLEdBQWQ7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsU0FBUztZQUNULFFBQVE7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDM0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFBQSxpQkFVQztRQVRDLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDM0QsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEUsa0JBQWtCO1FBQ2xCLGNBQUssT0FBQSxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLEVBQzNCLEtBQUssQ0FBQyxFQUhELENBR0MsRUFDTixLQUFLLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsNkJBQWMsR0FBZCxVQUFlLFFBQW9CO1FBQ2pDLFVBQVUsQ0FBQztZQUNULFFBQVEsRUFBRSxDQUFDLENBQUMsc0NBQXNDO1FBQ3BELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwrQkFBK0I7SUFDeEIscUJBQU0sR0FBYixVQUFjLE1BQWUsRUFBRSxRQUFnQixFQUFFLFVBQW9CLEVBQUUsWUFBcUI7UUFDMUYsc0NBQXNDO1FBQ3RDLElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRWxGLCtFQUErRTtRQUMvRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEIsRUFBRSxDQUFDLFFBQVEsRUFDVixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsRUFDNUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxHQUFHLENBQ3RCO2FBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF2S0Q7UUFMQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQixDQUFDO2dEQUVvQztJQU90QztRQUxDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7Z0RBRW9DO0lBS3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDYTtJQXRCWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBZ0x4QjtJQUFELFdBQUM7Q0FoTEQsQUFnTEMsQ0FoTGlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0w3QztrQkFoTG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuL0J1bGxldFwiO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyLCB7IEF1ZGlvVHlwZSB9IGZyb20gXCIuL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBbY2MuTm9kZV0sXHJcbiAgICB0b29sdGlwOiAnYnVsbGV0UG9pbnRzXzEnXHJcbiAgfSlcclxuICAvL2xpc3QgxJHhuqFuIGJhbiDEkeG6p3VcclxuICBwdWJsaWMgYnVsbGV0UG9pbnRzXzE6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoe1xyXG4gICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgdG9vbHRpcDogJ2J1bGxldFBvaW50c18yJ1xyXG4gIH0pXHJcbiAgLy9saXN0IMSR4bqhbiBzYXUga2hpIGxldmVsIHVwXHJcbiAgcHVibGljIGJ1bGxldFBvaW50c18yOiBjYy5Ob2RlW10gPSBbXTtcclxuICAvL2xpc3QgxJHhuqFuIGLhuq9uIHJhICBcclxuICBwcml2YXRlIGJ1bGxldFBvaW50cyA6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwcml2YXRlIHJpcHBsZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHJpdmF0ZSBzaGllbGQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gcHJpdmF0ZSBwbGF5ZXI6IGNjLk5vZGU7XHJcbiAgcHJpdmF0ZSB0b3VjaE9mZnNldDogY2MuVmVjMjtcclxuXHJcbiAgLy9naeG7m2kgaOG6oW4ga2h1IHbhu7FjIMSRaeG7gXUga2hp4buDblxyXG4gIHByaXZhdGUgc2NyZWVuOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoLCBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0KTtcclxuICBwcml2YXRlIGNsYW1wSG9yaXpvbjogY2MuVmVjMjsvLyA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLngpO1xyXG4gIHByaXZhdGUgY2xhbXBWZXJ0aWNhbDogY2MuVmVjMjsvLyA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLnkpO1xyXG4gIFxyXG4gIHByaXZhdGUgaXNTaG9vdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBcclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyB0aGlzLnBsYXllciA9IGNjLmZpbmQoJ3BsYXllcicpO1xyXG4gICAgLy9zZXQgdXAgbW92ZSBvYmplY3RcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNjcmVlbiA9IG5ldyBjYy5WZWMyKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aCwgY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCk7XHJcbiAgICB0aGlzLmNsYW1wSG9yaXpvbiA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLngpO1xyXG4gICAgdGhpcy5jbGFtcFZlcnRpY2FsID0gbmV3IGNjLlZlYzIoLTAuNSwgMC41KS5tdWwodGhpcy5zY3JlZW4ueSk7XHJcblxyXG4gICAgdGhpcy5idWxsZXRQb2ludHMgPSB0aGlzLmJ1bGxldFBvaW50c18xO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlZCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvL01vdmVcclxuXHJcbiAgLy9iYXQgZGF1IGFuIHh1b25nXHJcbiAgcHJpdmF0ZSBvblRvdWNoQmVnYW4oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpLyo6IGJvb2xlYW4qLyB7XHJcbiAgICB0aGlzLm9uU3RhcnQoKTtcclxuICAgIHRoaXMudG91Y2hPZmZzZXQgPSBVdGlsaXRpZXMudmVjM1RvVmVjMih0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRoaXMuZ2V0TW91c2VQb2ludChldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgLy9kaSBjaHV5ZW4gY2h1b3RcclxuICBwcml2YXRlIG9uVG91Y2hNb3ZlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgY29uc3QgbmV3UG9zID0gdGhpcy5nZXRNb3VzZVBvaW50KGV2ZW50KS5hZGQodGhpcy50b3VjaE9mZnNldCk7XHJcblxyXG4gICAgbmV3UG9zLnggPSBjYy5taXNjLmNsYW1wZihuZXdQb3MueCwgdGhpcy5jbGFtcEhvcml6b24ueCwgdGhpcy5jbGFtcEhvcml6b24ueSk7XHJcbiAgICBuZXdQb3MueSA9IGNjLm1pc2MuY2xhbXBmKG5ld1Bvcy55LCB0aGlzLmNsYW1wVmVydGljYWwueCwgdGhpcy5jbGFtcFZlcnRpY2FsLnkpO1xyXG4gICAgXHJcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBVdGlsaXRpZXMudmVjMlRvVmVjMyhuZXdQb3MpO1xyXG4gIH1cclxuXHJcbiAgLy9sYXkgdmkgdHJpIGNodW90IGJhbSB4dW9uZ1xyXG4gIHByaXZhdGUgZ2V0TW91c2VQb2ludChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IGNjLlZlYzJ7XHJcbiAgICByZXR1cm4gZXZlbnQuZ2V0TG9jYXRpb24oKS5zdWIoY2MudjIodGhpcy5zY3JlZW4ueCAqIDAuNSwgdGhpcy5zY3JlZW4ueSAqIDAuNSkpO1xyXG4gIH1cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuIFxyXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZykge1xyXG4gICAgICAvL23hu5dpIDAuMnMgYuG6r24gMSBs4bqnblxyXG4gICAgICBpZiAodGhpcy50aW1lciA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSAwLjI7XHJcbiAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vYuG6r24gxJHhuqFuXHJcbiAgcHJpdmF0ZSBzaG9vdCgpe1xyXG4gICAgU291bmRNYW5hZ2VyLklucy5QbGF5Q2xpcChBdWRpb1R5cGUuRlhfQnVsbGV0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgKFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuQnVsbGV0XzEsICB0aGlzLmJ1bGxldFBvaW50c1tpXS5nZXRXb3JsZFBvc2l0aW9uKCksdGhpcy5idWxsZXRQb2ludHNbaV0uYW5nbGUpIGFzIEJ1bGxldCkub25Jbml0KDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBvd2VyVXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1bGxldFBvaW50cyA9IHRoaXMuYnVsbGV0UG9pbnRzXzI7XHJcbiAgICB0aGlzLnNoaWVsZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgU291bmRNYW5hZ2VyLklucy5QbGF5Q2xpcChBdWRpb1R5cGUuRlhfQm9vc3Rlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25OZXh0Um91bmQoKXtcclxuICAgIFVJTWFuYWdlci5JbnMub25DbG9zZSgxKTtcclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLC0xNTAwLDApO1xyXG4gICAgdGhpcy5tb3ZlVG8oY2MuVmVjMy5VUC5tdWwoLTUwMCksIDEgLCBcclxuICAgICgpPT4ge1xyXG4gICAgICAvL2Lhuq10IHR1dFxyXG4gICAgICAvL2Lhuq10IGZ4XHJcbiAgICAgIHRoaXMucmlwcGxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9ICxmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Bd2FrZSgpIHtcclxuICAgIHRoaXMubW92ZVRvKGNjLlZlYzMuVVAubXVsKC01MDApLCAxICwgXHJcbiAgICAoKT0+IHtcclxuICAgICAgLy9i4bqtdCB0dXRcclxuICAgICAgLy9i4bqtdCBmeFxyXG4gICAgICB0aGlzLnJpcHBsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBVSU1hbmFnZXIuSW5zLm9uT3BlbigwKTtcclxuICAgIH0gLGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8va2hpIHBsYXllciBi4bqvdCDEkeG6p3Ug4bqlbiB4deG7kW5nXHJcbiAgcHVibGljIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAvL2Lhuq90IMSR4bqndSBi4bqvbiDEkeG6oW5cclxuICAgIGlmICghdGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XHJcbiAgICAgIC8vdOG6r3QgdHV0XHJcbiAgICAgIC8vdOG6r3QgZnhcclxuICAgICAgdGhpcy5yaXBwbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIFVJTWFuYWdlci5JbnMub25DbG9zZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZpbmlzaCgpOiB2b2lkIHtcclxuICAgIC8vdMOgdSBrIGLhuq9uIMSR4bqhbiBu4buvYSwgduG7pXQgxJFpXHJcbiAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubW92ZVRvKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwoLTIwMCkpLCAxICxcclxuICAgICgpPT4gIHRoaXMubW92ZVRvKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwoMTAwMDApKSwgMSAsXHJcbiAgICAvL3Nob3cgVUkgZW5kIGNhcmRcclxuICAgICgpPT4gVUlNYW5hZ2VyLklucy5vbk9wZW4oMSkgXHJcbiAgICAsZmFsc2UpXHJcbiAgICAsZmFsc2UpO1xyXG4gICAgdGhpcy53YWl0QW5kRXhlY3V0ZSgoKT0+dGhpcy5vbk5leHRSb3VuZCgpKTtcclxuICB9XHJcblxyXG4gIC8vIEjDoG0gY2jhu50gMyBnacOieVxyXG4gIHdhaXRBbmRFeGVjdXRlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTsgLy8gR+G7jWkgaMOgbSBjYWxsYmFjayBzYXUga2hpIGNo4budIDMgZ2nDonlcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgLy9ow6BtIGRpIGNodXnhu4NuIHNhbmcgduG7iyB0csOtIG3hu5tpXHJcbiAgcHVibGljIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIsIGRvbmVBY3Rpb246IEZ1bmN0aW9uLCBpc1dvcmxkU3BhY2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0YXJnZXQgcG9zaXRpb24gY+G7p2Egbm9kZVxyXG4gICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBpc1dvcmxkU3BhY2UgPyB0aGlzLm5vZGUuZ2V0TG9jYWxQb3NpdGlvbih0YXJnZXQpIDogdGFyZ2V0O1xyXG5cclxuICAgIC8vIFThuqFvIG3hu5l0IHR3ZWVuIMSR4buDIGRpIGNodXnhu4NuIG5vZGUgdOG7qyB24buLIHRyw60gaGnhu4duIHThuqFpIMSR4bq/biB24buLIHRyw60gbeG7m2kgKHBvc2l0aW9uKVxyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAudG8oZHVyYXRpb24sXHJcbiAgICAgICAgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSxcclxuICAgICAgICB7IGVhc2luZzogXCJsaW5lYXJcIiwgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYWxsKGRvbmVBY3Rpb24pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxufVxyXG4iXX0=