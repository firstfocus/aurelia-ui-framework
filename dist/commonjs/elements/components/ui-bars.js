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
var aurelia_framework_1 = require("aurelia-framework");
var UIToolbar = (function () {
    function UIToolbar(element) {
        this.element = element;
        if (element.hasAttribute('dark'))
            element.classList.add('dark');
        if (element.hasAttribute('light'))
            element.classList.add('light');
        if (element.hasAttribute('primary'))
            element.classList.add('primary');
        if (element.hasAttribute('secondary'))
            element.classList.add('secondary');
        if (element.hasAttribute('info'))
            element.classList.add('info');
        if (element.hasAttribute('danger'))
            element.classList.add('danger');
        if (element.hasAttribute('success'))
            element.classList.add('success');
        if (element.hasAttribute('warning'))
            element.classList.add('warning');
        if (element.hasAttribute('start'))
            element.classList.add('ui-start');
    }
    return UIToolbar;
}());
UIToolbar = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template class=\"ui-toolbar\"><slot></slot></template>"),
    aurelia_framework_1.customElement('ui-toolbar'),
    __metadata("design:paramtypes", [Element])
], UIToolbar);
exports.UIToolbar = UIToolbar;
var UIDivider = (function () {
    function UIDivider(element) {
        this.element = element;
    }
    return UIDivider;
}());
UIDivider = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template class=\"ui-divider\"></template>"),
    aurelia_framework_1.customElement('ui-divider'),
    __metadata("design:paramtypes", [Element])
], UIDivider);
exports.UIDivider = UIDivider;
var UIStatsbar = (function () {
    function UIStatsbar(element) {
        this.element = element;
        if (element.hasAttribute('small'))
            element.classList.add('ui-small');
        if (element.hasAttribute('icon-top'))
            element.classList.add('ui-icon-top');
        if (element.hasAttribute('vertical'))
            element.classList.add('ui-vertical');
        if (element.hasAttribute('dark'))
            element.classList.add('dark');
        if (element.hasAttribute('light'))
            element.classList.add('light');
        if (element.hasAttribute('muted'))
            element.classList.add('muted');
        if (element.hasAttribute('primary'))
            element.classList.add('primary');
        if (element.hasAttribute('secondary'))
            element.classList.add('secondary');
        if (element.hasAttribute('info'))
            element.classList.add('info');
        if (element.hasAttribute('danger'))
            element.classList.add('danger');
        if (element.hasAttribute('success'))
            element.classList.add('success');
        if (element.hasAttribute('warning'))
            element.classList.add('warning');
        if (element.hasAttribute('dark-bg'))
            element.classList.add('dark-bg');
        if (element.hasAttribute('light-bg'))
            element.classList.add('light-bg');
        if (element.hasAttribute('primary-bg'))
            element.classList.add('primary-bg');
        if (element.hasAttribute('secondary-bg'))
            element.classList.add('secondary-bg');
        if (element.hasAttribute('info-bg'))
            element.classList.add('info-bg');
        if (element.hasAttribute('danger-bg'))
            element.classList.add('danger-bg');
        if (element.hasAttribute('success-bg'))
            element.classList.add('success-bg');
        if (element.hasAttribute('warning-bg'))
            element.classList.add('warning-bg');
    }
    return UIStatsbar;
}());
UIStatsbar = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template class=\"ui-statsbar\"><slot></slot></template>"),
    aurelia_framework_1.customElement('ui-statsbar'),
    __metadata("design:paramtypes", [Element])
], UIStatsbar);
exports.UIStatsbar = UIStatsbar;
var UIStat = (function () {
    function UIStat(element) {
        this.element = element;
        this.glyph = '';
        this.label = '';
        if (element.hasAttribute('dark'))
            element.classList.add('dark');
        if (element.hasAttribute('light'))
            element.classList.add('light');
        if (element.hasAttribute('muted'))
            element.classList.add('muted');
        if (element.hasAttribute('primary'))
            element.classList.add('primary');
        if (element.hasAttribute('secondary'))
            element.classList.add('secondary');
        if (element.hasAttribute('info'))
            element.classList.add('info');
        if (element.hasAttribute('danger'))
            element.classList.add('danger');
        if (element.hasAttribute('success'))
            element.classList.add('success');
        if (element.hasAttribute('warning'))
            element.classList.add('warning');
        if (element.hasAttribute('dark-bg'))
            element.classList.add('dark-bg');
        if (element.hasAttribute('light-bg'))
            element.classList.add('light-bg');
        if (element.hasAttribute('primary-bg'))
            element.classList.add('primary-bg');
        if (element.hasAttribute('secondary-bg'))
            element.classList.add('secondary-bg');
        if (element.hasAttribute('info-bg'))
            element.classList.add('info-bg');
        if (element.hasAttribute('danger-bg'))
            element.classList.add('danger-bg');
        if (element.hasAttribute('success-bg'))
            element.classList.add('success-bg');
        if (element.hasAttribute('warning-bg'))
            element.classList.add('warning-bg');
    }
    return UIStat;
}());
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIStat.prototype, "glyph", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIStat.prototype, "label", void 0);
UIStat = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template class=\"ui-stat\"><ui-glyph glyph.bind=\"glyph\" if.bind=\"glyph\"></ui-glyph>\n  <div><div class=\"ui-stat-value\"><slot></slot></div><div class=\"ui-stat-label\" innerhtml.bind=\"label\" if.bind=\"label\"></div></div></template>"),
    aurelia_framework_1.customElement('ui-stat'),
    __metadata("design:paramtypes", [Element])
], UIStat);
exports.UIStat = UIStat;
