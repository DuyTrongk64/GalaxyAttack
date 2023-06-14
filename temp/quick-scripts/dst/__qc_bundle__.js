
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/_Game/Script/BGScroll');
require('./assets/_Game/Script/Bullet');
require('./assets/_Game/Script/CacheComponent');
require('./assets/_Game/Script/Character');
require('./assets/_Game/Script/Enemy');
require('./assets/_Game/Script/Manager/CollisionManager');
require('./assets/_Game/Script/Manager/LevelManager');
require('./assets/_Game/Script/Manager/SoundManager');
require('./assets/_Game/Script/Manager/UIManager');
require('./assets/_Game/Script/Pool/PoolControl');
require('./assets/_Game/Script/Pool/PoolMember');
require('./assets/_Game/Script/Pool/SimplePool');
require('./assets/_Game/Script/PowerUp');
require('./assets/_Game/Script/Ship');
require('./assets/_Game/Script/Utilities');
require('./assets/_Game/Script/VFX');
require('./assets/_Game/Script/ccExtension');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f5a32QkdpE/pa75V2ZRKSA', 'Enemy');
// _Game/Script/Enemy.ts

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
var Character_1 = require("./Character");
var LevelManager_1 = require("./Manager/LevelManager");
var SoundManager_1 = require("./Manager/SoundManager");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //nhận damage
    Enemy.prototype.onHit = function (damage) {
        _super.prototype.onHit.call(this, damage);
        // console.log("hit");
    };
    //enemy death sẽ đưa nó về pool
    Enemy.prototype.onDeath = function () {
        // super.onDeath();
        LevelManager_1.default.Ins.onEnemyDeath(this);
        SimplePool_1.default.spawn(SimplePool_1.PoolType.VFX_Explore, this.node.getWorldPosition(), 0);
        SimplePool_1.default.despawn(this);
        SoundManager_1.default.Ins.PlayClip(SoundManager_1.AudioType.FX_EnemyDie);
    };
    //hàm di chuyển sang vị trí mới
    Enemy.prototype.moveTo = function (target, duration, isWorldSpace) {
        // Lấy vị trí target position của node
        var targetPosition = isWorldSpace ? this.node.getLocalPosition(target) : target;
        // Tạo một tween để di chuyển node từ vị trí hiện tại đến vị trí mới (position)
        cc.tween(this.node)
            .to(duration, { position: targetPosition }, { easing: "linear", })
            .start();
    };
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(Character_1.default));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBQ3BDLHVEQUFrRDtBQUNsRCx1REFBaUU7QUFDakUsZ0RBQXlEO0FBRW5ELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFTO0lBQTVDOztJQStCQSxDQUFDO0lBN0JHLGFBQWE7SUFDTixxQkFBSyxHQUFaLFVBQWEsTUFBYztRQUN2QixpQkFBTSxLQUFLLFlBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsc0JBQXNCO0lBQzFCLENBQUM7SUFFRCwrQkFBK0I7SUFDckIsdUJBQU8sR0FBakI7UUFDSSxtQkFBbUI7UUFDbkIsc0JBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLG9CQUFVLENBQUMsS0FBSyxDQUFDLHFCQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsd0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsK0JBQStCO0lBQ3hCLHNCQUFNLEdBQWIsVUFBYyxNQUFlLEVBQUUsUUFBZ0IsRUFBRSxZQUFxQjtRQUNsRSxzQ0FBc0M7UUFDdEMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbEYsK0VBQStFO1FBQy9FLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxRQUFRLEVBQ1IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEVBQzVCLEVBQUksTUFBTSxFQUFFLFFBQVEsR0FBRyxDQUN0QjthQUNKLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUE3QmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0ErQnpCO0lBQUQsWUFBQztDQS9CRCxBQStCQyxDQS9Ca0MsbUJBQVMsR0ErQjNDO2tCQS9Cb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XHJcbmltcG9ydCBMZXZlbE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9MZXZlbE1hbmFnZXJcIjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciwgeyBBdWRpb1R5cGUgfSBmcm9tIFwiLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCwgeyBQb29sVHlwZSB9IGZyb20gXCIuL1Bvb2wvU2ltcGxlUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gICAgLy9uaOG6rW4gZGFtYWdlXHJcbiAgICBwdWJsaWMgb25IaXQoZGFtYWdlOiBudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyLm9uSGl0KGRhbWFnZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaXRcIik7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC8vZW5lbXkgZGVhdGggc+G6vSDEkcawYSBuw7MgduG7gSBwb29sXHJcbiAgICBwcm90ZWN0ZWQgb25EZWF0aCgpe1xyXG4gICAgICAgIC8vIHN1cGVyLm9uRGVhdGgoKTtcclxuICAgICAgICBMZXZlbE1hbmFnZXIuSW5zLm9uRW5lbXlEZWF0aCh0aGlzKTtcclxuICAgICAgICBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLlZGWF9FeHBsb3JlLCB0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCAwKTtcclxuICAgICAgICBTaW1wbGVQb29sLmRlc3Bhd24odGhpcyk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLklucy5QbGF5Q2xpcChBdWRpb1R5cGUuRlhfRW5lbXlEaWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaMOgbSBkaSBjaHV54buDbiBzYW5nIHbhu4sgdHLDrSBt4bubaVxyXG4gICAgcHVibGljIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIsIGlzV29ybGRTcGFjZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0YXJnZXQgcG9zaXRpb24gY+G7p2Egbm9kZVxyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gaXNXb3JsZFNwYWNlID8gdGhpcy5ub2RlLmdldExvY2FsUG9zaXRpb24odGFyZ2V0KSA6IHRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gVOG6oW8gbeG7mXQgdHdlZW4gxJHhu4MgZGkgY2h1eeG7g24gbm9kZSB04burIHbhu4sgdHLDrSBoaeG7h24gdOG6oWkgxJHhur9uIHbhu4sgdHLDrSBt4bubaSAocG9zaXRpb24pXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSxcclxuICAgICAgICAgICAgICAgIHsgICBlYXNpbmc6IFwibGluZWFyXCIsIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Pool/PoolControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f1a08OphpAoou9lIViF04J', 'PoolControl');
// _Game/Script/Pool/PoolControl.ts

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
exports.PoolAmount = void 0;
var SimplePool_1 = require("./SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, inspector = _a.inspector;
var PoolAmount = /** @class */ (function () {
    function PoolAmount() {
        this.root = null;
        this.prefab = null;
        this.amount = 0;
    }
    __decorate([
        property(cc.Node)
    ], PoolAmount.prototype, "root", void 0);
    __decorate([
        property(cc.Prefab)
    ], PoolAmount.prototype, "prefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PoolAmount.prototype, "amount", void 0);
    PoolAmount = __decorate([
        ccclass
    ], PoolAmount);
    return PoolAmount;
}());
exports.PoolAmount = PoolAmount;
var PoolControl = /** @class */ (function (_super) {
    __extends(PoolControl, _super);
    function PoolControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property({
        //     type: Array(PoolAmount),
        //     displayName: "Custom Objects",
        //     serializable: true,
        // })
        _this.pools = [];
        return _this;
    }
    PoolControl.prototype.onLoad = function () {
        for (var i = 0; i < this.pools.length; i++) {
            SimplePool_1.default.preload(this.pools[i].prefab, this.pools[i].root, this.pools[i].amount);
        }
    };
    __decorate([
        property(Array(PoolAmount))
    ], PoolControl.prototype, "pools", void 0);
    PoolControl = __decorate([
        ccclass
    ], PoolControl);
    return PoolControl;
}(cc.Component));
exports.default = PoolControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcUG9vbENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLDJDQUFzQztBQUVoQyxJQUFBLEtBQWlDLEVBQUUsQ0FBQyxVQUFVLEVBQTdDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBaUIsQ0FBQztBQUdyRDtJQUFBO1FBRVcsU0FBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNLO0lBUmpCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FTdEI7SUFBRCxpQkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBWXZCO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ0JDO1FBZEcsY0FBYztRQUNkLCtCQUErQjtRQUMvQixxQ0FBcUM7UUFDckMsMEJBQTBCO1FBQzFCLEtBQUs7UUFFTCxXQUFLLEdBQWlCLEVBQUUsQ0FBQzs7SUFRN0IsQ0FBQztJQU5HLDRCQUFNLEdBQU47UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdkMsb0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RjtJQUNMLENBQUM7SUFORDtRQURDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7OENBQ0g7SUFSUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBZ0IvQjtJQUFELGtCQUFDO0NBaEJELEFBZ0JDLENBaEJ3QyxFQUFFLENBQUMsU0FBUyxHQWdCcEQ7a0JBaEJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFBvb2xNZW1iZXIgZnJvbSBcIi4vUG9vbE1lbWJlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCBmcm9tIFwiLi9TaW1wbGVQb29sXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIGluc3BlY3Rvcn0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBvb2xBbW91bnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgcm9vdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHB1YmxpYyBwcmVmYWI6IFBvb2xNZW1iZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIGFtb3VudDogbnVtYmVyID0gMDtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbENvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7XHJcbiAgICAvLyAgICAgdHlwZTogQXJyYXkoUG9vbEFtb3VudCksXHJcbiAgICAvLyAgICAgZGlzcGxheU5hbWU6IFwiQ3VzdG9tIE9iamVjdHNcIixcclxuICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAvLyB9KVxyXG4gICAgQHByb3BlcnR5KEFycmF5KFBvb2xBbW91bnQpKVxyXG4gICAgcG9vbHM6IFBvb2xBbW91bnRbXSA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvb2xzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgU2ltcGxlUG9vbC5wcmVsb2FkKHRoaXMucG9vbHNbaV0ucHJlZmFiLCB0aGlzLnBvb2xzW2ldLnJvb3QsIHRoaXMucG9vbHNbaV0uYW1vdW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/BGScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ffb8Wz4pFDzIyiVTrkEw0C', 'BGScroll');
// _Game/Script/BGScroll.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layer1 = null;
        _this.layer2 = null;
        _this.speed = 0.1;
        _this.SCREEN_HEIGHT = 1920;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // start () {
    // }
    NewClass.prototype.update = function (dt) {
        var delta = cc.v3(0, -this.speed * dt, 0);
        this.layer1.position = this.layer1.position.add(delta);
        this.layer2.position = this.layer2.position.add(delta);
        if (this.layer1.position.y <= -this.SCREEN_HEIGHT) {
            this.layer1.position = this.layer1.position.add(cc.Vec3.UP.mul(this.SCREEN_HEIGHT * 2));
        }
        if (this.layer2.position.y <= -this.SCREEN_HEIGHT) {
            this.layer2.position = this.layer2.position.add(cc.Vec3.UP.mul(this.SCREEN_HEIGHT * 2));
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer2", void 0);
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "speed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQkdTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrQ0M7UUEvQkcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFWCxtQkFBYSxHQUFHLElBQUksQ0FBQzs7SUF1QmxDLENBQUM7SUFwQkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixhQUFhO0lBQ2IsSUFBSTtJQUVKLHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRjtJQUNMLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0M7SUFUSCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxheWVyMTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsYXllcjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHNwZWVkOiBudW1iZXIgPSAwLjE7XHJcbiAgICBcclxuICAgIHJlYWRvbmx5IFNDUkVFTl9IRUlHSFQgPSAxOTIwO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjMoMCwgLXRoaXMuc3BlZWQgKiBkdCwgMCk7XHJcbiAgICAgICAgdGhpcy5sYXllcjEucG9zaXRpb24gPSB0aGlzLmxheWVyMS5wb3NpdGlvbi5hZGQoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIyLnBvc2l0aW9uID0gdGhpcy5sYXllcjIucG9zaXRpb24uYWRkKGRlbHRhKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5sYXllcjEucG9zaXRpb24ueSA8PSAtdGhpcy5TQ1JFRU5fSEVJR0hUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXIxLnBvc2l0aW9uID0gdGhpcy5sYXllcjEucG9zaXRpb24uYWRkKGNjLlZlYzMuVVAubXVsKHRoaXMuU0NSRUVOX0hFSUdIVCAqIDIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxheWVyMi5wb3NpdGlvbi55IDw9IC10aGlzLlNDUkVFTl9IRUlHSFQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcjIucG9zaXRpb24gPSB0aGlzLmxheWVyMi5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwodGhpcy5TQ1JFRU5fSEVJR0hUICogMikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Manager/CollisionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3ea4VV3ydKArVFKywZJaUP', 'CollisionManager');
// _Game/Script/Manager/CollisionManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CollisionManager = /** @class */ (function (_super) {
    __extends(CollisionManager, _super);
    function CollisionManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollisionManager.prototype.onLoad = function () {
        // Enable Collision System
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    };
    CollisionManager = __decorate([
        ccclass
    ], CollisionManager);
    return CollisionManager;
}(cc.Component));
exports.default = CollisionManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcQ29sbGlzaW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDs7SUFTQSxDQUFDO0lBUEcsaUNBQU0sR0FBTjtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBUGdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBU3BDO0lBQUQsdUJBQUM7Q0FURCxBQVNDLENBVDZDLEVBQUUsQ0FBQyxTQUFTLEdBU3pEO2tCQVRvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBFbmFibGUgQ29sbGlzaW9uIFN5c3RlbVxyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b75390Cvt1Ec6p5bAc/Bhm3', 'SoundManager');
// _Game/Script/Manager/SoundManager.ts

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
exports.AudioType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioType;
(function (AudioType) {
    AudioType[AudioType["FX_Bullet"] = 0] = "FX_Bullet";
    AudioType[AudioType["FX_EnemyDie"] = 1] = "FX_EnemyDie";
    AudioType[AudioType["FX_Booster"] = 2] = "FX_Booster";
})(AudioType = exports.AudioType || (exports.AudioType = {}));
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //------------------------------------
        _this.clips = [];
        _this.audies = [];
        return _this;
    }
    SoundManager_1 = SoundManager;
    Object.defineProperty(SoundManager, "Ins", {
        get: function () {
            return SoundManager_1.ins;
        },
        enumerable: false,
        configurable: true
    });
    SoundManager.prototype.onLoad = function () {
        SoundManager_1.ins = this;
    };
    SoundManager.prototype.start = function () {
        for (var i = 0; i < this.clips.length; i++) {
            var node = new cc.Node().addComponent(cc.AudioSource);
            node.clip = this.clips[i];
            this.audies.push(node);
        }
    };
    SoundManager.prototype.PlayClip = function (type) {
        console.log(type);
        console.log(this.audies.length);
        this.audies[type].play();
    };
    var SoundManager_1;
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "clips", void 0);
    SoundManager = SoundManager_1 = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIsbURBQWEsQ0FBQTtJQUNiLHVEQUFlLENBQUE7SUFDZixxREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUlEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBZ0NDO1FBcEJFLHNDQUFzQztRQUdyQyxXQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUVuQixZQUFNLEdBQXFCLEVBQUUsQ0FBQzs7SUFlMUMsQ0FBQztxQkFoQ29CLFlBQVk7SUFJOUIsc0JBQWtCLG1CQUFHO2FBQXJCO1lBRUcsT0FBTyxjQUFZLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRVMsNkJBQU0sR0FBaEI7UUFDSSxjQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBUVUsNEJBQUssR0FBZjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFTSwrQkFBUSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOztJQWhCRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzsrQ0FDRTtJQWZWLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnQ2hDO0lBQUQsbUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NyRDtrQkFoQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEF1ZGlvVHlwZSB7XHJcbiAgICBGWF9CdWxsZXQgPSAwLFxyXG4gICAgRlhfRW5lbXlEaWUgPSAxLFxyXG4gICAgRlhfQm9vc3RlciA9IDIsXHJcbn1cclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgLy8gc2luZ2xldG9uXHJcbiAgIHByaXZhdGUgc3RhdGljIGlucyA6IFNvdW5kTWFuYWdlcjtcclxuICAgcHVibGljIHN0YXRpYyBnZXQgSW5zKCkgOiBTb3VuZE1hbmFnZXJcclxuICAge1xyXG4gICAgICByZXR1cm4gU291bmRNYW5hZ2VyLmlucztcclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgIFNvdW5kTWFuYWdlci5pbnMgPSB0aGlzO1xyXG4gICB9XHJcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5BdWRpb0NsaXBdKVxyXG4gICAgY2xpcHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICAgICAgXHJcbiAgICBwcml2YXRlIGF1ZGllczogY2MuQXVkaW9Tb3VyY2VbXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2xpcHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCkuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuICAgICAgICAgICAgbm9kZS5jbGlwID0gdGhpcy5jbGlwc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpZXMucHVzaChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBsYXlDbGlwKHR5cGU6IEF1ZGlvVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXVkaWVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5hdWRpZXNbdHlwZV0ucGxheSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/ccExtension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c350hPJVZJPqrsoAKCJsNU', 'ccExtension');
// _Game/Script/ccExtension.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// Lấy giá trị world position của node
cc.Node.prototype.getWorldPosition = function () {
    //this ở đây là node luôn
    var worldPos = this.convertToWorldSpaceAR(cc.v3(0, 0, 0));
    return worldPos;
};
// Đặt giá trị world position cho node
cc.Node.prototype.setWorldPosition = function (worldPosition) {
    var _a;
    //this ở đây là node luôn
    var localPos = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.convertToNodeSpaceAR(worldPosition);
    this.position = localPos;
};
// Lấy giá trị local position của node
cc.Node.prototype.getLocalPosition = function (worldPosition) {
    var _a;
    //this ở đây là node luôn
    var localPosition = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.convertToNodeSpaceAR(worldPosition);
    return localPosition;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcY2NFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFXakYsc0NBQXNDO0FBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHO0lBQ2pDLHlCQUF5QjtJQUN6QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsc0NBQXNDO0FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsYUFBc0I7O0lBQ2pFLHlCQUF5QjtJQUN6QixJQUFNLFFBQVEsU0FBRyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM3QixDQUFDLENBQUM7QUFFRCxzQ0FBc0M7QUFDdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxhQUFzQjs7SUFDakUseUJBQXlCO0lBQ3pCLElBQU0sYUFBYSxTQUFHLElBQUksQ0FBQyxNQUFNLDBDQUFFLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbi8vIGV4dGVuc2lvbiB2aeG6v3QgZ2V0IHNldCB24buLdHLDrSB3b3JsZCBwb3N0aW9uIHRoYXkgdsOsIGxvY2FsIHBvc3Rpb25cclxuZGVjbGFyZSBtb2R1bGUgY2Mge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XHJcbiAgICBnZXRXb3JsZFBvc2l0aW9uKCk6IGNjLlZlYzM7XHJcbiAgICBnZXRMb2NhbFBvc2l0aW9uKHBvczogY2MuVmVjMyk6IGNjLlZlYzM7XHJcbiAgICBzZXRXb3JsZFBvc2l0aW9uKHBvczogY2MuVmVjMyk6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4gLy8gTOG6pXkgZ2nDoSB0cuG7iyB3b3JsZCBwb3NpdGlvbiBj4bunYSBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLmdldFdvcmxkUG9zaXRpb24gPSBmdW5jdGlvbiAoKTogY2MuVmVjMyB7XHJcbiAgICAvL3RoaXMg4bufIMSRw6J5IGzDoCBub2RlIGx1w7RuXHJcbiAgICBjb25zdCB3b3JsZFBvcyA9IHRoaXMuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgIHJldHVybiB3b3JsZFBvcztcclxufTtcclxuXHJcbi8vIMSQ4bq3dCBnacOhIHRy4buLIHdvcmxkIHBvc2l0aW9uIGNobyBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLnNldFdvcmxkUG9zaXRpb24gPSBmdW5jdGlvbiAod29ybGRQb3NpdGlvbjogY2MuVmVjMykge1xyXG4gICAgLy90aGlzIOG7nyDEkcOieSBsw6Agbm9kZSBsdcO0blxyXG4gICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLnBhcmVudD8uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbG9jYWxQb3M7XHJcbn07XHJcblxyXG4gLy8gTOG6pXkgZ2nDoSB0cuG7iyBsb2NhbCBwb3NpdGlvbiBj4bunYSBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLmdldExvY2FsUG9zaXRpb24gPSBmdW5jdGlvbiAod29ybGRQb3NpdGlvbjogY2MuVmVjMyk6IGNjLlZlYzMge1xyXG4gICAgLy90aGlzIOG7nyDEkcOieSBsw6Agbm9kZSBsdcO0blxyXG4gICAgY29uc3QgbG9jYWxQb3NpdGlvbiA9IHRoaXMucGFyZW50Py5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvc2l0aW9uKTtcclxuICAgIHJldHVybiBsb2NhbFBvc2l0aW9uO1xyXG59O1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Utilities.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05edcloxuJAGLEtYk5yVlIn', 'Utilities');
// _Game/Script/Utilities.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    //chuyen vector 3 sang vector 2
    Utilities.vec3ToVec2 = function (v) {
        return cc.v2(v.x, v.y);
    };
    //chuyen vector 2 sang vector 3
    Utilities.vec2ToVec3 = function (v) {
        return cc.v3(v.x, v.y, 0);
    };
    Utilities = __decorate([
        ccclass
    ], Utilities);
    return Utilities;
}());
exports.default = Utilities;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcVXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQVdBLENBQUM7SUFUQywrQkFBK0I7SUFDakIsb0JBQVUsR0FBeEIsVUFBeUIsQ0FBVTtRQUNqQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUErQjtJQUNqQixvQkFBVSxHQUF4QixVQUF5QixDQUFVO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVZrQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBVzdCO0lBQUQsZ0JBQUM7Q0FYRCxBQVdDLElBQUE7a0JBWG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdGllc3tcclxuXHJcbiAgLy9jaHV5ZW4gdmVjdG9yIDMgc2FuZyB2ZWN0b3IgMlxyXG4gIHB1YmxpYyBzdGF0aWMgdmVjM1RvVmVjMih2OiBjYy5WZWMzKSA6IGNjLlZlYzJ7XHJcbiAgICByZXR1cm4gY2MudjIodi54LCB2LnkpO1xyXG4gIH1cclxuXHJcbiAgLy9jaHV5ZW4gdmVjdG9yIDIgc2FuZyB2ZWN0b3IgM1xyXG4gIHB1YmxpYyBzdGF0aWMgdmVjMlRvVmVjMyh2OiBjYy5WZWMyKSA6IGNjLlZlYzN7XHJcbiAgICByZXR1cm4gY2MudjModi54LCB2LnksIDApO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd581aEULKZLyoJxBrbPfh89', 'Bullet');
// _Game/Script/Bullet.ts

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
var CacheComponent_1 = require("./CacheComponent");
var PoolMember_1 = require("./Pool/PoolMember");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 2000;
        _this.damage = 4;
        return _this;
    }
    Bullet.prototype.onInit = function (damage) {
        this.damage = damage;
    };
    Bullet.prototype.update = function (dt) {
        var velocity = this.node.up.mul(dt).mul(this.speed);
        var newPos = this.node.position.add(velocity);
        // move bullet forward with info of spawn point (pivot & rotation)
        this.node.setPosition(newPos);
        // despawn bullet if out of bound
        if (this.node.position.y >= 950) {
            // NodePool.getInstance().putNode(this.node);
            SimplePool_1.default.despawn(this);
        }
    };
    // Despawn bullet if col with enemy
    Bullet.prototype.onCollisionEnter = function (other, self) {
        //đoạn này k cần so sánh group name vì đã chia group contact rồi
        // if (other.node.group == 'enemy') {
        //cache component để tối ưu game hơn
        //-> cái này dùng cho game lớn hơn chứ playable chắc k cần lắm
        CacheComponent_1.default.getCharacter(other).onHit(this.damage);
        SimplePool_1.default.spawn(SimplePool_1.PoolType.VFX_Spark, this.node.getWorldPosition());
        SimplePool_1.default.despawn(this);
        // }
    };
    __decorate([
        property
    ], Bullet.prototype, "speed", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(PoolMember_1.default));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG1EQUE4QztBQUU5QyxnREFBMkM7QUFDM0MsZ0RBQXlEO0FBRW5ELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFVO0lBQTlDO1FBQUEscUVBcUNDO1FBbENXLFdBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUFpQy9CLENBQUM7SUEvQlUsdUJBQU0sR0FBYixVQUFjLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhELGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO1lBQzdCLDZDQUE2QztZQUM3QyxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDbEQsZ0VBQWdFO1FBQ2hFLHFDQUFxQztRQUVyQyxvQ0FBb0M7UUFDcEMsOERBQThEO1FBQzlELHdCQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsb0JBQVUsQ0FBQyxLQUFLLENBQUMscUJBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDbkUsb0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSTtJQUNSLENBQUM7SUFoQ0Q7UUFEQyxRQUFRO3lDQUNvQjtJQUhaLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FxQzFCO0lBQUQsYUFBQztDQXJDRCxBQXFDQyxDQXJDbUMsb0JBQVUsR0FxQzdDO2tCQXJDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDYWNoZUNvbXBvbmVudCBmcm9tIFwiLi9DYWNoZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgUG9vbE1lbWJlciBmcm9tIFwiLi9Qb29sL1Bvb2xNZW1iZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUG9vbE1lbWJlciB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAyMDAwO1xyXG4gICAgcHJpdmF0ZSBkYW1hZ2U6IG51bWJlciA9IDQ7XHJcblxyXG4gICAgcHVibGljIG9uSW5pdChkYW1hZ2U6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLm5vZGUudXAubXVsKGR0KS5tdWwodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh2ZWxvY2l0eSk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgYnVsbGV0IGZvcndhcmQgd2l0aCBpbmZvIG9mIHNwYXduIHBvaW50IChwaXZvdCAmIHJvdGF0aW9uKVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MpO1xyXG5cclxuICAgICAgICAvLyBkZXNwYXduIGJ1bGxldCBpZiBvdXQgb2YgYm91bmRcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBvc2l0aW9uLnkgPj0gOTUwKSB7XHJcbiAgICAgICAgICAgIC8vIE5vZGVQb29sLmdldEluc3RhbmNlKCkucHV0Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBTaW1wbGVQb29sLmRlc3Bhd24odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERlc3Bhd24gYnVsbGV0IGlmIGNvbCB3aXRoIGVuZW15XHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICAvL8SRb+G6oW4gbsOgeSBrIGPhuqduIHNvIHPDoW5oIGdyb3VwIG5hbWUgdsOsIMSRw6MgY2hpYSBncm91cCBjb250YWN0IHLhu5NpXHJcbiAgICAgICAgLy8gaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ2VuZW15Jykge1xyXG5cclxuICAgICAgICAvL2NhY2hlIGNvbXBvbmVudCDEkeG7gyB04buRaSDGsHUgZ2FtZSBoxqFuXHJcbiAgICAgICAgLy8tPiBjw6FpIG7DoHkgZMO5bmcgY2hvIGdhbWUgbOG7m24gaMahbiBjaOG7qSBwbGF5YWJsZSBjaOG6r2MgayBj4bqnbiBs4bqvbVxyXG4gICAgICAgIENhY2hlQ29tcG9uZW50LmdldENoYXJhY3RlcihvdGhlcikub25IaXQodGhpcy5kYW1hZ2UpO1xyXG4gICAgICAgIFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuVkZYX1NwYXJrLCB0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpKTtcclxuICAgICAgICBTaW1wbGVQb29sLmRlc3Bhd24odGhpcyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Character.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb241ucKy5GSYBvAHYdm57I', 'Character');
// _Game/Script/Character.ts

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
var PoolMember_1 = require("./Pool/PoolMember");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Character.prototype, "isDead", {
        //khai bao action
        // public onDeathAction: (c:Character) => void;
        //getter
        get: function () {
            return this.hp <= 0;
        },
        enumerable: false,
        configurable: true
    });
    //khởi tạo
    Character.prototype.onInit = function (hp) {
        this.hp = hp;
    };
    //nhận damage
    Character.prototype.onHit = function (damage) {
        if (!this.isDead) {
            this.hp -= damage;
            if (this.isDead) {
                this.onDeath();
            }
        }
    };
    Character.prototype.onDeath = function () {
        // this.onDeathAction(this);
    };
    Character = __decorate([
        ccclass
    ], Character);
    return Character;
}(PoolMember_1.default));
exports.default = Character;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQ2hhcmFjdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBVTtJQUFqRDs7SUErQkEsQ0FBQztJQXZCRyxzQkFBSSw2QkFBTTtRQUpWLGlCQUFpQjtRQUNqQiwrQ0FBK0M7UUFFL0MsUUFBUTthQUNSO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELFVBQVU7SUFDSCwwQkFBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtJQUNOLHlCQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUM7WUFDbEIsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQUVTLDJCQUFPLEdBQWpCO1FBQ0ksNEJBQTRCO0lBQ2hDLENBQUM7SUE3QmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0ErQjdCO0lBQUQsZ0JBQUM7Q0EvQkQsQUErQkMsQ0EvQnNDLG9CQUFVLEdBK0JoRDtrQkEvQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgUG9vbE1lbWJlciBmcm9tIFwiLi9Qb29sL1Bvb2xNZW1iZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgUG9vbE1lbWJlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBocCA6IG51bWJlcjtcclxuXHJcbiAgICAvL2toYWkgYmFvIGFjdGlvblxyXG4gICAgLy8gcHVibGljIG9uRGVhdGhBY3Rpb246IChjOkNoYXJhY3RlcikgPT4gdm9pZDtcclxuXHJcbiAgICAvL2dldHRlclxyXG4gICAgZ2V0IGlzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ocCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8va2jhu59pIHThuqFvXHJcbiAgICBwdWJsaWMgb25Jbml0KGhwOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaHAgPSBocDtcclxuICAgIH1cclxuXHJcbiAgICAvL25o4bqtbiBkYW1hZ2VcclxuICAgIHB1YmxpYyBvbkhpdChkYW1hZ2U6IG51bWJlcil7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNEZWFkKXtcclxuICAgICAgICAgICAgdGhpcy5ocCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNEZWFkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EZWF0aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlYXRoKCl7XHJcbiAgICAgICAgLy8gdGhpcy5vbkRlYXRoQWN0aW9uKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix1REFBaUU7QUFDakUsaURBQTRDO0FBQzVDLGdEQUF5RDtBQUN6RCx5Q0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFnTEM7UUF4S1Esb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFPL0Isb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFDdEMsbUJBQW1CO1FBQ1gsa0JBQVksR0FBZSxFQUFFLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBTS9CLDZCQUE2QjtRQUNyQixZQUFNLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFJL0YsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUE2Q3BDLGdDQUFnQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQWdHNUIsQ0FBQztJQTVJQyxxQkFBTSxHQUFOO1FBQ0UsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxD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QUFRLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQixDQUFDO2dEQUVvQztJQU90QztRQUxDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7Z0RBRW9DO0lBS3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDYTtJQXRCWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBZ0x4QjtJQUFELFdBQUM7Q0FoTEQsQUFnTEMsQ0FoTGlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0w3QztrQkFoTG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuL0J1bGxldFwiO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyLCB7IEF1ZGlvVHlwZSB9IGZyb20gXCIuL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBbY2MuTm9kZV0sXHJcbiAgICB0b29sdGlwOiAnYnVsbGV0UG9pbnRzXzEnXHJcbiAgfSlcclxuICAvL2xpc3QgxJHhuqFuIGJhbiDEkeG6p3VcclxuICBwdWJsaWMgYnVsbGV0UG9pbnRzXzE6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoe1xyXG4gICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgdG9vbHRpcDogJ2J1bGxldFBvaW50c18yJ1xyXG4gIH0pXHJcbiAgLy9saXN0IMSR4bqhbiBzYXUga2hpIGxldmVsIHVwXHJcbiAgcHVibGljIGJ1bGxldFBvaW50c18yOiBjYy5Ob2RlW10gPSBbXTtcclxuICAvL2xpc3QgxJHhuqFuIGLhuq9uIHJhICBcclxuICBwcml2YXRlIGJ1bGxldFBvaW50cyA6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwcml2YXRlIHJpcHBsZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgcHJpdmF0ZSBzaGllbGQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gcHJpdmF0ZSBwbGF5ZXI6IGNjLk5vZGU7XHJcbiAgcHJpdmF0ZSB0b3VjaE9mZnNldDogY2MuVmVjMjtcclxuXHJcbiAgLy9naeG7m2kgaOG6oW4ga2h1IHbhu7FjIMSRaeG7gXUga2hp4buDblxyXG4gIHByaXZhdGUgc2NyZWVuOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoLCBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0KTtcclxuICBwcml2YXRlIGNsYW1wSG9yaXpvbjogY2MuVmVjMjsvLyA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLngpO1xyXG4gIHByaXZhdGUgY2xhbXBWZXJ0aWNhbDogY2MuVmVjMjsvLyA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLnkpO1xyXG4gIFxyXG4gIHByaXZhdGUgaXNTaG9vdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBcclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyB0aGlzLnBsYXllciA9IGNjLmZpbmQoJ3BsYXllcicpO1xyXG4gICAgLy9zZXQgdXAgbW92ZSBvYmplY3RcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNjcmVlbiA9IG5ldyBjYy5WZWMyKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aCwgY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCk7XHJcbiAgICB0aGlzLmNsYW1wSG9yaXpvbiA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLngpO1xyXG4gICAgdGhpcy5jbGFtcFZlcnRpY2FsID0gbmV3IGNjLlZlYzIoLTAuNSwgMC41KS5tdWwodGhpcy5zY3JlZW4ueSk7XHJcblxyXG4gICAgdGhpcy5idWxsZXRQb2ludHMgPSB0aGlzLmJ1bGxldFBvaW50c18xO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xyXG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlZCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvL01vdmVcclxuXHJcbiAgLy9iYXQgZGF1IGFuIHh1b25nXHJcbiAgcHJpdmF0ZSBvblRvdWNoQmVnYW4oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpLyo6IGJvb2xlYW4qLyB7XHJcbiAgICB0aGlzLm9uU3RhcnQoKTtcclxuICAgIHRoaXMudG91Y2hPZmZzZXQgPSBVdGlsaXRpZXMudmVjM1RvVmVjMih0aGlzLm5vZGUucG9zaXRpb24pLnN1YnRyYWN0KHRoaXMuZ2V0TW91c2VQb2ludChldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgLy9kaSBjaHV5ZW4gY2h1b3RcclxuICBwcml2YXRlIG9uVG91Y2hNb3ZlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgY29uc3QgbmV3UG9zID0gdGhpcy5nZXRNb3VzZVBvaW50KGV2ZW50KS5hZGQodGhpcy50b3VjaE9mZnNldCk7XHJcblxyXG4gICAgbmV3UG9zLnggPSBjYy5taXNjLmNsYW1wZihuZXdQb3MueCwgdGhpcy5jbGFtcEhvcml6b24ueCwgdGhpcy5jbGFtcEhvcml6b24ueSk7XHJcbiAgICBuZXdQb3MueSA9IGNjLm1pc2MuY2xhbXBmKG5ld1Bvcy55LCB0aGlzLmNsYW1wVmVydGljYWwueCwgdGhpcy5jbGFtcFZlcnRpY2FsLnkpO1xyXG4gICAgXHJcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBVdGlsaXRpZXMudmVjMlRvVmVjMyhuZXdQb3MpO1xyXG4gIH1cclxuXHJcbiAgLy9sYXkgdmkgdHJpIGNodW90IGJhbSB4dW9uZ1xyXG4gIHByaXZhdGUgZ2V0TW91c2VQb2ludChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IGNjLlZlYzJ7XHJcbiAgICByZXR1cm4gZXZlbnQuZ2V0TG9jYXRpb24oKS5zdWIoY2MudjIodGhpcy5zY3JlZW4ueCAqIDAuNSwgdGhpcy5zY3JlZW4ueSAqIDAuNSkpO1xyXG4gIH1cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuIFxyXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZykge1xyXG4gICAgICAvL23hu5dpIDAuMnMgYuG6r24gMSBs4bqnblxyXG4gICAgICBpZiAodGhpcy50aW1lciA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSAwLjI7XHJcbiAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vYuG6r24gxJHhuqFuXHJcbiAgcHJpdmF0ZSBzaG9vdCgpe1xyXG4gICAgU291bmRNYW5hZ2VyLklucy5QbGF5Q2xpcChBdWRpb1R5cGUuRlhfQnVsbGV0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgKFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuQnVsbGV0XzEsICB0aGlzLmJ1bGxldFBvaW50c1tpXS5nZXRXb3JsZFBvc2l0aW9uKCksdGhpcy5idWxsZXRQb2ludHNbaV0uYW5nbGUpIGFzIEJ1bGxldCkub25Jbml0KDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBvd2VyVXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1bGxldFBvaW50cyA9IHRoaXMuYnVsbGV0UG9pbnRzXzI7XHJcbiAgICB0aGlzLnNoaWVsZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgU291bmRNYW5hZ2VyLklucy5QbGF5Q2xpcChBdWRpb1R5cGUuRlhfQm9vc3Rlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25OZXh0Um91bmQoKXtcclxuICAgIFVJTWFuYWdlci5JbnMub25DbG9zZSgxKTtcclxuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLC0xNTAwLDApO1xyXG4gICAgdGhpcy5tb3ZlVG8oY2MuVmVjMy5VUC5tdWwoLTUwMCksIDEgLCBcclxuICAgICgpPT4ge1xyXG4gICAgICAvL2Lhuq10IHR1dFxyXG4gICAgICAvL2Lhuq10IGZ4XHJcbiAgICAgIHRoaXMucmlwcGxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9ICxmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Bd2FrZSgpIHtcclxuICAgIHRoaXMubW92ZVRvKGNjLlZlYzMuVVAubXVsKC01MDApLCAxICwgXHJcbiAgICAoKT0+IHtcclxuICAgICAgLy9i4bqtdCB0dXRcclxuICAgICAgLy9i4bqtdCBmeFxyXG4gICAgICB0aGlzLnJpcHBsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICBVSU1hbmFnZXIuSW5zLm9uT3BlbigwKTtcclxuICAgIH0gLGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8va2hpIHBsYXllciBi4bqvdCDEkeG6p3Ug4bqlbiB4deG7kW5nXHJcbiAgcHVibGljIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAvL2Lhuq90IMSR4bqndSBi4bqvbiDEkeG6oW5cclxuICAgIGlmICghdGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XHJcbiAgICAgIC8vdOG6r3QgdHV0XHJcbiAgICAgIC8vdOG6r3QgZnhcclxuICAgICAgdGhpcy5yaXBwbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIFVJTWFuYWdlci5JbnMub25DbG9zZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZpbmlzaCgpOiB2b2lkIHtcclxuICAgIC8vdMOgdSBrIGLhuq9uIMSR4bqhbiBu4buvYSwgduG7pXQgxJFpXHJcbiAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubW92ZVRvKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwoLTIwMCkpLCAxICxcclxuICAgICgpPT4gIHRoaXMubW92ZVRvKHRoaXMubm9kZS5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwoMTAwMDApKSwgMSAsXHJcbiAgICAvL3Nob3cgVUkgZW5kIGNhcmRcclxuICAgICgpPT4gVUlNYW5hZ2VyLklucy5vbk9wZW4oMSkgXHJcbiAgICAsZmFsc2UpXHJcbiAgICAsZmFsc2UpO1xyXG4gICAgdGhpcy53YWl0QW5kRXhlY3V0ZSgoKT0+dGhpcy5vbk5leHRSb3VuZCgpKTtcclxuICB9XHJcblxyXG4gIC8vIEjDoG0gY2jhu50gMyBnacOieVxyXG4gIHdhaXRBbmRFeGVjdXRlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2FsbGJhY2soKTsgLy8gR+G7jWkgaMOgbSBjYWxsYmFjayBzYXUga2hpIGNo4budIDMgZ2nDonlcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgLy9ow6BtIGRpIGNodXnhu4NuIHNhbmcgduG7iyB0csOtIG3hu5tpXHJcbiAgcHVibGljIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIsIGRvbmVBY3Rpb246IEZ1bmN0aW9uLCBpc1dvcmxkU3BhY2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0YXJnZXQgcG9zaXRpb24gY+G7p2Egbm9kZVxyXG4gICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBpc1dvcmxkU3BhY2UgPyB0aGlzLm5vZGUuZ2V0TG9jYWxQb3NpdGlvbih0YXJnZXQpIDogdGFyZ2V0O1xyXG5cclxuICAgIC8vIFThuqFvIG3hu5l0IHR3ZWVuIMSR4buDIGRpIGNodXnhu4NuIG5vZGUgdOG7qyB24buLIHRyw60gaGnhu4duIHThuqFpIMSR4bq/biB24buLIHRyw60gbeG7m2kgKHBvc2l0aW9uKVxyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAudG8oZHVyYXRpb24sXHJcbiAgICAgICAgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSxcclxuICAgICAgICB7IGVhc2luZzogXCJsaW5lYXJcIiwgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYWxsKGRvbmVBY3Rpb24pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Pool/SimplePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70677Li4BZOVa4X54PO83rD', 'SimplePool');
// _Game/Script/Pool/SimplePool.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolType = void 0;
var PoolMember_1 = require("./PoolMember");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolType;
(function (PoolType) {
    PoolType[PoolType["None"] = 0] = "None";
    PoolType[PoolType["Bullet_1"] = 1] = "Bullet_1";
    PoolType[PoolType["Bullet_2"] = 2] = "Bullet_2";
    PoolType[PoolType["Enemy_1"] = 10] = "Enemy_1";
    PoolType[PoolType["Enemy_2"] = 11] = "Enemy_2";
    PoolType[PoolType["VFX_Explore"] = 12] = "VFX_Explore";
    PoolType[PoolType["VFX_Spark"] = 13] = "VFX_Spark";
    PoolType[PoolType["Booster"] = 14] = "Booster";
})(PoolType = exports.PoolType || (exports.PoolType = {}));
var SimplePool = /** @class */ (function () {
    function SimplePool() {
    }
    //getter
    SimplePool.isHasPool = function (poolType) {
        return this.link.has(poolType);
    };
    //setter
    SimplePool.newPool = function (poolType, pool) {
        this.link.set(poolType, pool);
    };
    //setter
    SimplePool.getPool = function (poolType) {
        return this.link.get(poolType);
    };
    SimplePool.preload = function (prefab, parentNode, amount) {
        var pool = new Pool(prefab, parentNode, amount);
        if (!this.isHasPool(pool.poolType)) {
            this.newPool(pool.poolType, pool);
        }
    };
    SimplePool.spawn = function (nodeType, pos, angle) {
        if (angle === void 0) { angle = 0; }
        console.log(nodeType);
        if (!this.isHasPool(nodeType))
            console.error(" NEED PRELOAD POOL : " + nodeType + "!!!");
        return this.getPool(nodeType).spawn(pos, angle);
    };
    SimplePool.spawnT = function (nodeType, pos, angle) {
        return this.spawn(nodeType, pos, angle);
    };
    SimplePool.despawn = function (clone) {
        this.getPool(clone.poolType).despawn(clone);
    };
    //TODO: lam not sau
    SimplePool.collect = function (nodeType) {
        this.getPool(nodeType).collect();
    };
    SimplePool.collectAll = function () {
    };
    //trong scene sẽ cần tạo một node và add poolcontrol vào
    //list pool control được dùng để khởi tạo số lượng item tương ứng
    //prefab nào muốn dùng pool sẽ phải kế thừa poolmember
    //định nghĩa item đó bằng pooltype
    SimplePool.link = new Map;
    SimplePool = __decorate([
        ccclass
    ], SimplePool);
    return SimplePool;
}());
exports.default = SimplePool;
var Pool = /** @class */ (function () {
    function Pool(prefab, parentNode, amount) {
        this.list = [];
        this.preload(prefab, parentNode, amount);
    }
    Object.defineProperty(Pool.prototype, "poolType", {
        get: function () {
            return this.prefab.poolType;
        },
        enumerable: false,
        configurable: true
    });
    Pool.prototype.preload = function (prefab, parentNode, amount) {
        this.prefab = cc.instantiate(prefab).getComponent(PoolMember_1.default);
        this.parentNode = parentNode;
        for (var i = 0; i < amount; i++) {
            var clone = cc.instantiate(this.prefab.node).getComponent(PoolMember_1.default);
            clone.node.active = false;
            this.parentNode.addChild(clone.node);
            this.list.push(clone);
        }
    };
    Pool.prototype.spawn = function (pos, angle) {
        var clone = null;
        if (this.list.length > 0) {
            clone = this.list.shift();
        }
        else {
            clone = cc.instantiate(this.prefab.node).getComponent(PoolMember_1.default);
            this.parentNode.addChild(clone.node);
        }
        clone.node.setWorldPosition(pos);
        clone.node.angle = angle;
        clone.node.active = true;
        return clone;
    };
    Pool.prototype.despawn = function (clone) {
        if (clone.node.active) {
            clone.node.active = false;
            this.list.push(clone);
        }
    };
    Pool.prototype.collect = function () {
    };
    return Pool;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxRQVNYO0FBVEQsV0FBWSxRQUFRO0lBQ2hCLHVDQUFRLENBQUE7SUFDUiwrQ0FBWSxDQUFBO0lBQ1osK0NBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osc0RBQWdCLENBQUE7SUFDaEIsa0RBQWUsQ0FBQTtJQUNmLDhDQUFhLENBQUE7QUFDakIsQ0FBQyxFQVRXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBU25CO0FBR0Q7SUFBQTtJQXNEQSxDQUFDO0lBN0NHLFFBQVE7SUFDRCxvQkFBUyxHQUFoQixVQUFpQixRQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ0Qsa0JBQU8sR0FBZCxVQUFlLFFBQW1CLEVBQUUsSUFBVTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7SUFDRCxrQkFBTyxHQUFkLFVBQWUsUUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRWEsa0JBQU8sR0FBckIsVUFBc0IsTUFBa0IsRUFBRSxVQUFtQixFQUFFLE1BQWM7UUFFekUsSUFBSSxJ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QUFaLFVBQWEsR0FBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxzQkFBTyxHQUFkLFVBQWUsS0FBaUI7UUFDNUIsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFFTCxDQUFDO0lBRUQsc0JBQU8sR0FBUDtJQUNBLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2xNZW1iZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvb2xUeXBlIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgQnVsbGV0XzEgPSAxLCBcclxuICAgIEJ1bGxldF8yID0gMixcclxuICAgIEVuZW15XzEgPSAxMCxcclxuICAgIEVuZW15XzIgPSAxMSxcclxuICAgIFZGWF9FeHBsb3JlID0gMTIsXHJcbiAgICBWRlhfU3BhcmsgID0gMTMsXHJcbiAgICBCb29zdGVyICA9IDE0LFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVQb29sIHtcclxuXHJcbiAgICAvL3Ryb25nIHNjZW5lIHPhur0gY+G6p24gdOG6oW8gbeG7mXQgbm9kZSB2w6AgYWRkIHBvb2xjb250cm9sIHbDoG9cclxuICAgIC8vbGlzdCBwb29sIGNvbnRyb2wgxJHGsOG7o2MgZMO5bmcgxJHhu4Mga2jhu59pIHThuqFvIHPhu5EgbMaw4bujbmcgaXRlbSB0xrDGoW5nIOG7qW5nXHJcbiAgICAvL3ByZWZhYiBuw6BvIG114buRbiBkw7luZyBwb29sIHPhur0gcGjhuqNpIGvhur8gdGjhu6thIHBvb2xtZW1iZXJcclxuICAgIC8vxJHhu4tuaCBuZ2jEqWEgaXRlbSDEkcOzIGLhurFuZyBwb29sdHlwZVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGxpbms6IE1hcDxQb29sVHlwZSwgUG9vbD4gPSBuZXcgTWFwPFBvb2xUeXBlLCBQb29sPjtcclxuXHJcbiAgICAvL2dldHRlclxyXG4gICAgc3RhdGljIGlzSGFzUG9vbChwb29sVHlwZSA6IFBvb2xUeXBlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGluay5oYXMocG9vbFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dGVyXHJcbiAgICBzdGF0aWMgbmV3UG9vbChwb29sVHlwZSA6IFBvb2xUeXBlLCBwb29sOiBQb29sKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5saW5rLnNldChwb29sVHlwZSwgcG9vbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vc2V0dGVyXHJcbiAgICBzdGF0aWMgZ2V0UG9vbChwb29sVHlwZSA6IFBvb2xUeXBlKTogUG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGluay5nZXQocG9vbFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZChwcmVmYWI6IFBvb2xNZW1iZXIsIHBhcmVudE5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBvb2wgPSBuZXcgUG9vbChwcmVmYWIsIHBhcmVudE5vZGUsIGFtb3VudCk7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNIYXNQb29sKHBvb2wucG9vbFR5cGUpKXtcclxuICAgICAgICAgICAgdGhpcy5uZXdQb29sKHBvb2wucG9vbFR5cGUsIHBvb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3Bhd24obm9kZVR5cGU6IFBvb2xUeXBlLCBwb3M6IGNjLlZlYzMsIGFuZ2xlOiBudW1iZXIgPSAwKTogUG9vbE1lbWJlciB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZVR5cGUpO1xyXG4gICAgICAgIGlmKCF0aGlzLmlzSGFzUG9vbChub2RlVHlwZSkpIGNvbnNvbGUuZXJyb3IoXCIgTkVFRCBQUkVMT0FEIFBPT0wgOiBcIiArIG5vZGVUeXBlICsgXCIhISFcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChub2RlVHlwZSkuc3Bhd24ocG9zLCBhbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNwYXduVDxUPihub2RlVHlwZTogUG9vbFR5cGUsIHBvczogY2MuVmVjMywgYW5nbGU6IG51bWJlcik6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduKG5vZGVUeXBlLCBwb3MsIGFuZ2xlKSBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZXNwYXduKGNsb25lOiBQb29sTWVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQb29sKGNsb25lLnBvb2xUeXBlKS5kZXNwYXduKGNsb25lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IGxhbSBub3Qgc2F1XHJcbiAgICBzdGF0aWMgY29sbGVjdChub2RlVHlwZTogUG9vbFR5cGUpIHtcclxuICAgICAgICB0aGlzLmdldFBvb2wobm9kZVR5cGUpLmNvbGxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29sbGVjdEFsbCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBQb29sIHtcclxuXHJcbiAgICBwcml2YXRlIHBhcmVudE5vZGU6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIHByZWZhYjogUG9vbE1lbWJlcjtcclxuICAgIHByaXZhdGUgbGlzdDogUG9vbE1lbWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIGdldCBwb29sVHlwZSgpOiBQb29sVHlwZXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmVmYWIucG9vbFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZChwcmVmYWIsIHBhcmVudE5vZGUsIGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJlZmFiID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcilcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYi5ub2RlKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcik7XHJcbiAgICAgICAgICAgIGNsb25lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hZGRDaGlsZChjbG9uZS5ub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKGNsb25lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNwYXduKHBvczogY2MuVmVjMywgYW5nbGU6IG51bWJlcik6IFBvb2xNZW1iZXIge1xyXG4gICAgICAgIGxldCBjbG9uZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNsb25lID0gdGhpcy5saXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYi5ub2RlKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hZGRDaGlsZChjbG9uZS5ub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsb25lLm5vZGUuc2V0V29ybGRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIGNsb25lLm5vZGUuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICBjbG9uZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBjbG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzcGF3bihjbG9uZTogUG9vbE1lbWJlcikge1xyXG4gICAgICAgIGlmKGNsb25lLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2xvbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goY2xvbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGVjdCgpIHtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Pool/PoolMember.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4d12mgJHNHHbhShPyOuGl5', 'PoolMember');
// _Game/Script/Pool/PoolMember.ts

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
var SimplePool_1 = require("./SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolMember = /** @class */ (function (_super) {
    __extends(PoolMember, _super);
    function PoolMember() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.poolType = SimplePool_1.PoolType.None;
        return _this;
    }
    __decorate([
        property({ type: cc.Enum(SimplePool_1.PoolType) })
    ], PoolMember.prototype, "poolType", void 0);
    PoolMember = __decorate([
        ccclass
    ], PoolMember);
    return PoolMember;
}(cc.Component));
exports.default = PoolMember;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcUG9vbE1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBb0Q7QUFFOUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFHQztRQURVLGNBQVEsR0FBYSxxQkFBUSxDQUFDLElBQUksQ0FBQzs7SUFDOUMsQ0FBQztJQURHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQVEsQ0FBQyxFQUFFLENBQUM7Z0RBQ0k7SUFGekIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQUc5QjtJQUFELGlCQUFDO0NBSEQsQUFHQyxDQUh1QyxFQUFFLENBQUMsU0FBUyxHQUduRDtrQkFIb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTaW1wbGVQb29sLCB7IFBvb2xUeXBlIH0gZnJvbSBcIi4vU2ltcGxlUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb29sTWVtYmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oUG9vbFR5cGUpIH0pXHJcbiAgICBwdWJsaWMgcG9vbFR5cGU6IFBvb2xUeXBlID0gUG9vbFR5cGUuTm9uZTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/PowerUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df312CgxkxLGLplqCwUcFS+', 'PowerUp');
// _Game/Script/PowerUp.ts

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
var LevelManager_1 = require("./Manager/LevelManager");
var PoolMember_1 = require("./Pool/PoolMember");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PowerUp = /** @class */ (function (_super) {
    __extends(PowerUp, _super);
    function PowerUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //script này copy của Khánh cho nhanh, mà hình như ô Khánh này copy của ChatGPT hay sao mà tự dưng nhìn comment chuẩn chỉ thế
        _this.speed = 500;
        _this.time = 0;
        _this.threshold = 20;
        return _this;
    }
    PowerUp.prototype.onEnable = function () {
        this.time = 1;
    };
    PowerUp.prototype.update = function (dt) {
        if (this.time > 0) {
            // calculate pivot of boost: when active is move down to end screen height
            var direction = cc.v2(0, -1).rotateSelf(this.node.angle * Math.PI / 180);
            // add info with deltatime to boost interact with player
            var velocity = direction.mul(this.speed);
            var delta = velocity.mul(cc.director.getDeltaTime());
            var v3Delta = new cc.Vec3(delta.x, delta.y, 0);
            var newPos = this.node.position.add(v3Delta);
            // move down the boost
            this.node.setPosition(newPos);
            // after time move on screen, boost will move toward player
            this.time -= dt;
        }
        else {
            //get info player
            var playerPos = LevelManager_1.default.Ins.ship.node.position;
            //get info this boost
            var boostPos = this.node.position;
            // calculate distance btw this boost with player
            var distance = playerPos.sub(boostPos).mag();
            var direction = playerPos.sub(boostPos).normalize();
            // movement action
            var movement = direction.mul(2000 * dt);
            // move this boost towards player node
            this.node.position = boostPos.add(movement);
            // checking if distance btw this boost with player = 0, it will despawn self
            if (distance < this.threshold) {
                this.onDespawn();
            }
        }
    };
    PowerUp.prototype.onDespawn = function () {
        LevelManager_1.default.Ins.ship.onPowerUp();
        SimplePool_1.default.despawn(this);
    };
    PowerUp = __decorate([
        ccclass
    ], PowerUp);
    return PowerUp;
}(PoolMember_1.default));
exports.default = PowerUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG93ZXJVcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1REFBa0Q7QUFDbEQsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBVTtJQUEvQztRQUFBLHFFQTBEQztRQXhERyw2SEFBNkg7UUFDckgsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBVyxFQUFFLENBQUM7O0lBcURuQyxDQUFDO0lBbkRHLDBCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsMEVBQTBFO1lBQzFFLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFM0Usd0RBQXdEO1lBQ3hELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELElBQU0sT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9DLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU5QiwyREFBMkQ7WUFDM0QsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FDbkI7YUFDSTtZQUNELGlCQUFpQjtZQUNqQixJQUFNLFNBQVMsR0FBRyxzQkFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUV0RCxxQkFBcUI7WUFDckIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFcEMsZ0RBQWdEO1lBQ2hELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDL0MsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV0RCxrQkFBa0I7WUFDbEIsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFMUMsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFNUMsNEVBQTRFO1lBQzVFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxzQkFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsb0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXhEZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBEM0I7SUFBRCxjQUFDO0NBMURELEFBMERDLENBMURvQyxvQkFBVSxHQTBEOUM7a0JBMURvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IExldmVsTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL0xldmVsTWFuYWdlclwiO1xyXG5pbXBvcnQgUG9vbE1lbWJlciBmcm9tIFwiLi9Qb29sL1Bvb2xNZW1iZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wgZnJvbSBcIi4vUG9vbC9TaW1wbGVQb29sXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvd2VyVXAgZXh0ZW5kcyBQb29sTWVtYmVyIHtcclxuXHJcbiAgICAvL3NjcmlwdCBuw6B5IGNvcHkgY+G7p2EgS2jDoW5oIGNobyBuaGFuaCwgbcOgIGjDrG5oIG5oxrAgw7QgS2jDoW5oIG7DoHkgY29weSBj4bunYSBDaGF0R1BUIGhheSBzYW8gbcOgIHThu7EgZMawbmcgbmjDrG4gY29tbWVudCBjaHXhuqluIGNo4buJIHRo4bq/XHJcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1MDA7XHJcbiAgICBwcml2YXRlIHRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRocmVzaG9sZDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBwaXZvdCBvZiBib29zdDogd2hlbiBhY3RpdmUgaXMgbW92ZSBkb3duIHRvIGVuZCBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNjLnYyKDAsIC0xKS5yb3RhdGVTZWxmKHRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGluZm8gd2l0aCBkZWx0YXRpbWUgdG8gYm9vc3QgaW50ZXJhY3Qgd2l0aCBwbGF5ZXJcclxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBkaXJlY3Rpb24ubXVsKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IHZlbG9jaXR5Lm11bChjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHYzRGVsdGEgPSBuZXcgY2MuVmVjMyhkZWx0YS54LCBkZWx0YS55LCAwKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh2M0RlbHRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgZG93biB0aGUgYm9vc3RcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZnRlciB0aW1lIG1vdmUgb24gc2NyZWVuLCBib29zdCB3aWxsIG1vdmUgdG93YXJkIHBsYXllclxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgLT0gZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL2dldCBpbmZvIHBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSBMZXZlbE1hbmFnZXIuSW5zLnNoaXAubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vZ2V0IGluZm8gdGhpcyBib29zdFxyXG4gICAgICAgICAgICBjb25zdCBib29zdFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZSBidHcgdGhpcyBib29zdCB3aXRoIHBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHBsYXllclBvcy5zdWIoYm9vc3RQb3MpLm1hZygpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwbGF5ZXJQb3Muc3ViKGJvb3N0UG9zKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmVtZW50IGFjdGlvblxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlbWVudCA9IGRpcmVjdGlvbi5tdWwoMjAwMCAqIGR0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdGhpcyBib29zdCB0b3dhcmRzIHBsYXllciBub2RlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGJvb3N0UG9zLmFkZChtb3ZlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVja2luZyBpZiBkaXN0YW5jZSBidHcgdGhpcyBib29zdCB3aXRoIHBsYXllciA9IDAsIGl0IHdpbGwgZGVzcGF3biBzZWxmXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzcGF3bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzcGF3bigpIHtcclxuICAgICAgICBMZXZlbE1hbmFnZXIuSW5zLnNoaXAub25Qb3dlclVwKCk7XHJcbiAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/VFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'daf85TWbbBBF7nluAeArrEU', 'VFX');
// _Game/Script/VFX.ts

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
var PoolMember_1 = require("./Pool/PoolMember");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VFX = /** @class */ (function (_super) {
    __extends(VFX, _super);
    function VFX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.timeAlive = 1;
        return _this;
    }
    VFX.prototype.onEnable = function () {
        var _this = this;
        this.anim.play();
        // cc.tween(this.node).delay(0.5).call(()=> SimplePool.despawn(this));
        //delay 0.5s thi despawn
        setTimeout(function () {
            SimplePool_1.default.despawn(_this);
        }, this.timeAlive * 1000);
    };
    __decorate([
        property({ type: cc.Animation })
    ], VFX.prototype, "anim", void 0);
    __decorate([
        property({ type: cc.Float })
    ], VFX.prototype, "timeAlive", void 0);
    VFX = __decorate([
        ccclass
    ], VFX);
    return VFX;
}(PoolMember_1.default));
exports.default = VFX;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcVkZYLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUMzQyxnREFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBaUMsdUJBQVU7SUFBM0M7UUFBQSxxRUFrQkM7UUFmRyxVQUFJLEdBQWtCLElBQUksQ0FBQztRQUczQixlQUFTLEdBQVksQ0FBQyxDQUFDOztJQVkzQixDQUFDO0lBVmEsc0JBQVEsR0FBbEI7UUFBQSxpQkFTQztRQVBHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakIsc0VBQXNFO1FBQ3RFLHdCQUF3QjtRQUN4QixVQUFVLENBQUM7WUFDUCxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FDQUNOO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzswQ0FDTjtJQU5OLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FrQnZCO0lBQUQsVUFBQztDQWxCRCxBQWtCQyxDQWxCZ0Msb0JBQVUsR0FrQjFDO2tCQWxCb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2wvUG9vbE1lbWJlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVkZYIGV4dGVuZHMgUG9vbE1lbWJlciB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQW5pbWF0aW9uIH0pXHJcbiAgICBhbmltIDogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCB9KVxyXG4gICAgdGltZUFsaXZlIDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KCk7XHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC41KS5jYWxsKCgpPT4gU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpKTtcclxuICAgICAgICAvL2RlbGF5IDAuNXMgdGhpIGRlc3Bhd25cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgICAgIH0sIHRoaXMudGltZUFsaXZlICogMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/CacheComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2672f9+MlBEzpgIbITYC/RA', 'CacheComponent');
// _Game/Script/CacheComponent.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CacheComponent = /** @class */ (function () {
    function CacheComponent() {
    }
    CacheComponent.getCharacter = function (col) {
        if (!this.linkCharacter.has(col)) {
            this.linkCharacter.set(col, col.getComponent(Character_1.default));
        }
        return this.linkCharacter.get(col);
    };
    CacheComponent.linkCharacter = new Map;
    CacheComponent = __decorate([
        ccclass
    ], CacheComponent);
    return CacheComponent;
}());
exports.default = CacheComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQ2FjaGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7OztBQUVsRix5Q0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtJQVdBLENBQUM7SUFQaUIsMkJBQVksR0FBMUIsVUFBMkIsR0FBZ0I7UUFDdkMsSUFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBUGMsNEJBQWEsR0FBZ0MsSUFBSSxHQUEyQixDQUFDO0lBRjNFLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FXbEM7SUFBRCxxQkFBQztDQVhELEFBV0MsSUFBQTtrQkFYb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rQ2hhcmFjdGVyOiBNYXA8Y2MuQ29sbGlkZXIsIENoYXJhY3Rlcj4gPSBuZXcgTWFwPGNjLkNvbGxpZGVyLCBDaGFyYWN0ZXI+O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q2hhcmFjdGVyKGNvbDogY2MuQ29sbGlkZXIpOiBDaGFyYWN0ZXJ7XHJcbiAgICAgICAgaWYoIXRoaXMubGlua0NoYXJhY3Rlci5oYXMoY29sKSl7XHJcbiAgICAgICAgICAgIHRoaXMubGlua0NoYXJhY3Rlci5zZXQoY29sLCBjb2wuZ2V0Q29tcG9uZW50KENoYXJhY3RlcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5saW5rQ2hhcmFjdGVyLmdldChjb2wpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1acdTJ5/xOOaoh/vERQpQ2', 'UIManager');
// _Game/Script/Manager/UIManager.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //------------------------------------
        // open UI theo index, UI nào thứ tự càng cao thì layer càng cao
        // close UI cũng theo index luôn
        // UI có nút bấm nào thì nên tạo 1 function rồi kéo thả vào trong này, ví dụ như ấn end card button
        // prefab để show ui lên
        _this.prefabs = [];
        //list roots node để show layer theo đúng thứ tự mong muốn
        _this.roots = [];
        //list canvas để lấy link
        _this.canvas = [];
        return _this;
    }
    UIManager_1 = UIManager;
    Object.defineProperty(UIManager, "Ins", {
        get: function () {
            return UIManager_1.ins;
        },
        enumerable: false,
        configurable: true
    });
    UIManager.prototype.onLoad = function () {
        UIManager_1.ins = this;
        for (var i = 0; i < this.prefabs.length; i++) {
            this.roots[i] = new cc.Node();
            this.roots[i].setParent(this.node);
        }
    };
    //open theo index
    UIManager.prototype.onOpen = function (index) {
        if (this.canvas[index] == null) {
            this.canvas[index] = cc.instantiate(this.prefabs[index]);
            this.canvas[index].setParent(this.roots[index]);
        }
        this.canvas[index].active = true;
    };
    //close theo index
    UIManager.prototype.onClose = function (index) {
        if (this.canvas[index] != null) {
            this.canvas[index].active = false;
        }
    };
    UIManager.prototype.endcardButton = function () {
    };
    var UIManager_1;
    __decorate([
        property([cc.Prefab])
    ], UIManager.prototype, "prefabs", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBcURDO1FBcENHLHNDQUFzQztRQUV0QyxnRUFBZ0U7UUFDaEUsZ0NBQWdDO1FBQ2hDLG1HQUFtRztRQUVuRyx3QkFBd0I7UUFFeEIsYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUV6QiwwREFBMEQ7UUFDMUQsV0FBSyxHQUFlLEVBQUUsQ0FBQztRQUV2Qix5QkFBeUI7UUFDekIsWUFBTSxHQUFlLEVBQUUsQ0FBQzs7SUFzQjVCLENBQUM7a0JBckRvQixTQUFTO0lBSTFCLHNCQUFrQixnQkFBRzthQUFyQjtZQUVHLE9BQU8sV0FBUyxDQUFDLEdBQUcsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVTLDBCQUFNLEdBQWhCO1FBQ0ksV0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQWlCRCxpQkFBaUI7SUFDViwwQkFBTSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQkFBa0I7SUFDWCwyQkFBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFTSxpQ0FBYSxHQUFwQjtJQUVBLENBQUM7O0lBM0JEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzhDQUNHO0lBekJSLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxRDdCO0lBQUQsZ0JBQUM7Q0FyREQsQUFxREMsQ0FyRHNDLEVBQUUsQ0FBQyxTQUFTLEdBcURsRDtrQkFyRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNpbmdsZXRvblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zIDogVUlNYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zKCkgOiBVSU1hbmFnZXJcclxuICAgIHtcclxuICAgICAgIHJldHVybiBVSU1hbmFnZXIuaW5zO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFVJTWFuYWdlci5pbnMgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJlZmFicy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHNbaV0gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzW2ldLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuICAgIC8vIG9wZW4gVUkgdGhlbyBpbmRleCwgVUkgbsOgbyB0aOG7qSB04buxIGPDoG5nIGNhbyB0aMOsIGxheWVyIGPDoG5nIGNhb1xyXG4gICAgLy8gY2xvc2UgVUkgY8WpbmcgdGhlbyBpbmRleCBsdcO0blxyXG4gICAgLy8gVUkgY8OzIG7DunQgYuG6pW0gbsOgbyB0aMOsIG7Dqm4gdOG6oW8gMSBmdW5jdGlvbiBy4buTaSBrw6lvIHRo4bqjIHbDoG8gdHJvbmcgbsOgeSwgdsOtIGThu6UgbmjGsCDhuqVuIGVuZCBjYXJkIGJ1dHRvblxyXG5cclxuICAgIC8vIHByZWZhYiDEkeG7gyBzaG93IHVpIGzDqm5cclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIHByZWZhYnMgOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvL2xpc3Qgcm9vdHMgbm9kZSDEkeG7gyBzaG93IGxheWVyIHRoZW8gxJHDum5nIHRo4bupIHThu7EgbW9uZyBtdeG7kW5cclxuICAgIHJvb3RzIDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgLy9saXN0IGNhbnZhcyDEkeG7gyBs4bqleSBsaW5rXHJcbiAgICBjYW52YXMgOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvL29wZW4gdGhlbyBpbmRleFxyXG4gICAgcHVibGljIG9uT3BlbihpbmRleDogbnVtYmVyKXtcclxuICAgICAgICBpZih0aGlzLmNhbnZhc1tpbmRleF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1tpbmRleF0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNbaW5kZXhdLnNldFBhcmVudCh0aGlzLnJvb3RzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL2Nsb3NlIHRoZW8gaW5kZXhcclxuICAgIHB1YmxpYyBvbkNsb3NlKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIGlmKHRoaXMuY2FudmFzW2luZGV4XSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5kY2FyZEJ1dHRvbigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
