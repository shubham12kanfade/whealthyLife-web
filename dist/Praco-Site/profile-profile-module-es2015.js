(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js ***!
  \**********************************************************************/
/*! exports provided: CDK_DRAG_CONFIG, CDK_DRAG_HANDLE, CDK_DRAG_PARENT, CDK_DRAG_PLACEHOLDER, CDK_DRAG_PREVIEW, CDK_DROP_LIST, CDK_DROP_LIST_GROUP, CdkDrag, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup, DragDrop, DragDropModule, DragDropRegistry, DragRef, DropListRef, copyArrayItem, moveItemInArray, transferArrayItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_HANDLE", function() { return CDK_DRAG_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PARENT", function() { return CDK_DRAG_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PLACEHOLDER", function() { return CDK_DRAG_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_PREVIEW", function() { return CDK_DRAG_PREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_GROUP", function() { return CDK_DROP_LIST_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @docs-private
 */



function extendStyles(dest, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */
function toggleNativeDragInteractions(element, enable) {
    const userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Parses a CSS time value to milliseconds. */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */
function getTransformTransitionDurationInMs(element) {
    const computedStyle = getComputedStyle(element);
    const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all');
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    const propertyIndex = transitionedProperties.indexOf(property);
    const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */
function parseCssPropertyValue(computedStyle, name) {
    const value = computedStyle.getPropertyValue(name);
    return value.split(',').map(part => part.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Gets a mutable version of an element's bounding `ClientRect`. */
function getMutableClientRect(element) {
    const clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
function isInsideClientRect(clientRect, x, y) {
    const { top, bottom, left, right } = clientRect;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
    const { top, right, bottom, left, width, height } = rect;
    const xThreshold = width * threshold;
    const yThreshold = height * threshold;
    return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
        pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Keeps track of the scroll position and dimensions of the parents of an element. */
class ParentPositionTracker {
    constructor(_document, _viewportRuler) {
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        /** Cached positions of the scrollable parent elements. */
        this.positions = new Map();
    }
    /** Clears the cached positions. */
    clear() {
        this.positions.clear();
    }
    /** Caches the positions. Should be called at the beginning of a drag sequence. */
    cache(elements) {
        this.clear();
        this.positions.set(this._document, {
            scrollPosition: this._viewportRuler.getViewportScrollPosition(),
        });
        elements.forEach(element => {
            this.positions.set(element, {
                scrollPosition: { top: element.scrollTop, left: element.scrollLeft },
                clientRect: getMutableClientRect(element)
            });
        });
    }
    /** Handles scrolling while a drag is taking place. */
    handleScroll(event) {
        const target = event.target;
        const cachedPosition = this.positions.get(target);
        if (!cachedPosition) {
            return null;
        }
        // Used when figuring out whether an element is inside the scroll parent. If the scrolled
        // parent is the `document`, we use the `documentElement`, because IE doesn't support
        // `contains` on the `document`.
        const scrolledParentNode = target === this._document ? target.documentElement : target;
        const scrollPosition = cachedPosition.scrollPosition;
        let newTop;
        let newLeft;
        if (target === this._document) {
            const viewportScrollPosition = this._viewportRuler.getViewportScrollPosition();
            newTop = viewportScrollPosition.top;
            newLeft = viewportScrollPosition.left;
        }
        else {
            newTop = target.scrollTop;
            newLeft = target.scrollLeft;
        }
        const topDifference = scrollPosition.top - newTop;
        const leftDifference = scrollPosition.left - newLeft;
        // Go through and update the cached positions of the scroll
        // parents that are inside the element that was scrolled.
        this.positions.forEach((position, node) => {
            if (position.clientRect && target !== node && scrolledParentNode.contains(node)) {
                adjustClientRect(position.clientRect, topDifference, leftDifference);
            }
        });
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
        return { top: topDifference, left: leftDifference };
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Creates a deep clone of an element. */
function deepCloneNode(node) {
    const clone = node.cloneNode(true);
    const descendantsWithId = clone.querySelectorAll('[id]');
    const nodeName = node.nodeName.toLowerCase();
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (let i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    if (nodeName === 'canvas') {
        transferCanvasData(node, clone);
    }
    else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
        transferInputData(node, clone);
    }
    transferData('canvas', node, clone, transferCanvasData);
    transferData('input, textarea, select', node, clone, transferInputData);
    return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */
function transferData(selector, node, clone, callback) {
    const descendantElements = node.querySelectorAll(selector);
    if (descendantElements.length) {
        const cloneElements = clone.querySelectorAll(selector);
        for (let i = 0; i < descendantElements.length; i++) {
            callback(descendantElements[i], cloneElements[i]);
        }
    }
}
// Counter for unique cloned radio button names.
let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */
function transferInputData(source, clone) {
    clone.value = source.value;
    // Radio button `name` attributes must be unique for radio button groups
    // otherwise original radio buttons can lose their checked state
    // once the clone is inserted in the DOM.
    if (clone.type === 'radio' && clone.name) {
        clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
    }
}
/** Transfers the data of one canvas element to another. */
function transferCanvasData(source, clone) {
    const context = clone.getContext('2d');
    if (context) {
        // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
        // We can't do much about it so just ignore the error.
        try {
            context.drawImage(source, 0, 0);
        }
        catch (_a) { }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: true });
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
class DragRef {
    constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /** CSS `transform` that is applied to the element while it's being dragged. */
        this._activeTransform = { x: 0, y: 0 };
        /** Emits when the item is being moved. */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Subscription to pointer movement events. */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Subscription to the event that is dispatched when the user lifts their pointer. */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Subscription to the viewport being scrolled. */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Subscription to the viewport being resized. */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Cached reference to the boundary element. */
        this._boundaryElement = null;
        /** Whether the native dragging interactions have been enabled on the root element. */
        this._nativeInteractionsEnabled = true;
        /** Elements that can be used to drag the draggable item. */
        this._handles = [];
        /** Registered handles that are currently disabled. */
        this._disabledHandles = new Set();
        /** Layout direction of the item. */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /** Emits as the drag sequence is being prepared. */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user starts dragging the item. */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents;
        /** Handler for the `mousedown`/`touchstart` events. */
        this._pointerDown = (event) => {
            this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (this._handles.length) {
                const targetHandle = this._handles.find(handle => {
                    const target = event.target;
                    return !!target && (target === handle || handle.contains(target));
                });
                if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
                    this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!this.disabled) {
                this._initializeDragSequence(this._rootElement, event);
            }
        };
        /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
        this._pointerMove = (event) => {
            // Prevent the default action as early as possible in order to block
            // native actions like dragging the selected text or images with the mouse.
            event.preventDefault();
            const pointerPosition = this._getPointerPositionOnPage(event);
            if (!this._hasStartedDragging) {
                const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
                const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
                const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
                    if (!isDelayElapsed) {
                        this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!this._dropContainer || !this._dropContainer.isDragging()) {
                        this._hasStartedDragging = true;
                        this._ngZone.run(() => this._startDragSequence(event));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!this._previewRect || (!this._previewRect.width && !this._previewRect.height)) {
                    this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
                }
            }
            const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
            this._hasMoved = true;
            this._lastKnownPointerPosition = pointerPosition;
            this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (this._dropContainer) {
                this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
            }
            else {
                const activeTransform = this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;
                this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
                    const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;
                    this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (this._moveEvents.observers.length) {
                this._ngZone.run(() => {
                    this._moveEvents.next({
                        source: this,
                        pointerPosition: constrainedPointerPosition,
                        event,
                        distance: this._getDragDistance(constrainedPointerPosition),
                        delta: this._pointerDirectionDelta
                    });
                });
            }
        };
        /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
        this._pointerUp = (event) => {
            this._endDragSequence(event);
        };
        this.withRootElement(element);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        _dragDropRegistry.registerDragItem(this);
    }
    /** Whether starting to drag this element is disabled. */
    get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
    }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._toggleNativeDragInteractions();
        }
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    getPlaceholderElement() {
        return this._placeholder;
    }
    /** Returns the root draggable element. */
    getRootElement() {
        return this._rootElement;
    }
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     */
    getVisibleElement() {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    }
    /** Registers the handles that can be used to drag the element. */
    withHandles(handles) {
        this._handles = handles.map(handle => Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(handle));
        this._handles.forEach(handle => toggleNativeDragInteractions(handle, false));
        this._toggleNativeDragInteractions();
        return this;
    }
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    withPreviewTemplate(template) {
        this._previewTemplate = template;
        return this;
    }
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    withPlaceholderTemplate(template) {
        this._placeholderTemplate = template;
        return this;
    }
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(rootElement);
        if (element !== this._rootElement) {
            if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
            }
            this._ngZone.runOutsideAngular(() => {
                element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
            });
            this._initialTransform = undefined;
            this._rootElement = element;
        }
        if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
            this._ownerSVGElement = this._rootElement.ownerSVGElement;
        }
        return this;
    }
    /**
     * Element to which the draggable's position will be constrained.
     */
    withBoundaryElement(boundaryElement) {
        this._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundaryElement) : null;
        this._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize());
        }
        return this;
    }
    /** Removes the dragging functionality from the DOM element. */
    dispose() {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
        }
        removeNode(this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._resizeSubscription.unsubscribe();
        this._parentPositions.clear();
        this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate =
            this._previewTemplate = this._anchor = null;
    }
    /** Checks whether the element is currently being dragged. */
    isDragging() {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    /** Resets a standalone drag item to its initial position. */
    reset() {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    }
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    disableHandle(handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    }
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    enableHandle(handle) {
        this._disabledHandles.delete(handle);
    }
    /** Sets the layout direction of the draggable item. */
    withDirection(direction) {
        this._direction = direction;
        return this;
    }
    /** Sets the container that the item is part of. */
    _withDropContainer(container) {
        this._dropContainer = container;
    }
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    getFreeDragPosition() {
        const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    setFreeDragPosition(value) {
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform.x = value.x;
        this._passiveTransform.y = value.y;
        if (!this._dropContainer) {
            this._applyRootElementTransform(value.x, value.y);
        }
        return this;
    }
    /** Updates the item's sort order based on the last-known pointer position. */
    _sortFromLastPointerPosition() {
        const position = this._lastKnownPointerPosition;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
        }
    }
    /** Unsubscribes from the global subscriptions. */
    _removeSubscriptions() {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    }
    /** Destroys the preview element and its ViewRef. */
    _destroyPreview() {
        if (this._preview) {
            removeNode(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = null;
    }
    /** Destroys the placeholder element and its ViewRef. */
    _destroyPlaceholder() {
        if (this._placeholder) {
            removeNode(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = null;
    }
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    _endDragSequence(event) {
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then(() => {
                this._cleanupDragArtifacts(event);
                this._cleanupCachedDimensions();
                this._dragDropRegistry.stopDragging(this);
            });
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run(() => {
                this.ended.next({
                    source: this,
                    distance: this._getDragDistance(this._getPointerPositionOnPage(event))
                });
            });
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    }
    /** Starts the dragging sequence. */
    _startDragSequence(event) {
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        const dropContainer = this._dropContainer;
        if (dropContainer) {
            const element = this._rootElement;
            const parent = element.parentNode;
            const preview = this._preview = this._createPreviewElement();
            const placeholder = this._placeholder = this._createPlaceholderElement();
            const anchor = this._anchor = this._anchor || this._document.createComment('');
            // Insert an anchor node so that we can restore the element's position in the DOM.
            parent.insertBefore(anchor, element);
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild(parent.replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            this.started.next({ source: this }); // Emit before notifying the container.
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
        }
        else {
            this.started.next({ source: this });
            this._initialContainer = this._initialIndex = undefined;
        }
        // Important to run after we've called `start` on the parent container
        // so that it has had time to resolve its scrollable parents.
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    }
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    _initializeDragSequence(referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        const isDragging = this.isDragging();
        const isTouchSequence = isTouchEvent(event);
        const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
        const rootElement = this._rootElement;
        const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(scrollEvent => {
            this._updateOnScroll(scrollEvent);
        });
        if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        // If we have a custom preview we can't know ahead of time how large it'll be so we position
        // it next to the cursor. The exception is when the consumer has opted into making the preview
        // the same size as the root element, in which case we do know the size.
        const previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template &&
            !previewTemplate.matchSize ? { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition =
            this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    }
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    _cleanupDragArtifacts(event) {
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(() => {
            const container = this._dropContainer;
            const currentIndex = container.getItemIndex(this);
            const pointerPosition = this._getPointerPositionOnPage(event);
            const distance = this._getDragDistance(this._getPointerPositionOnPage(event));
            const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            this.ended.next({ source: this, distance });
            this.dropped.next({
                item: this,
                currentIndex,
                previousIndex: this._initialIndex,
                container: container,
                previousContainer: this._initialContainer,
                isPointerOverContainer,
                distance
            });
            container.drop(this, currentIndex, this._initialContainer, isPointerOverContainer, distance, this._initialIndex);
            this._dropContainer = this._initialContainer;
        });
    }
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    _updateActiveDropContainer({ x, y }, { x: rawX, y: rawY }) {
        // Drop container that draggable has been moved into.
        let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(() => {
                // Notify the old container that the item has left.
                this.exited.next({ item: this, container: this._dropContainer });
                this._dropContainer.exit(this);
                // Notify the new container that the item has entered.
                this._dropContainer = newContainer;
                this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
                    // If we're re-entering the initial container and sorting is disabled,
                    // put item the into its starting index to begin with.
                    newContainer.sortingDisabled ? this._initialIndex : undefined);
                this.entered.next({
                    item: this,
                    container: newContainer,
                    currentIndex: newContainer.getItemIndex(this)
                });
            });
        }
        this._dropContainer._startScrollingIfNecessary(rawX, rawY);
        this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    _createPreviewElement() {
        const previewConfig = this._previewTemplate;
        const previewClass = this.previewClass;
        const previewTemplate = previewConfig ? previewConfig.template : null;
        let preview;
        if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.
            const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
            }
            else {
                preview.style.transform =
                    getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
        }
        else {
            const element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element.getBoundingClientRect());
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: `${this._config.zIndex || 1000}`
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        if (previewClass) {
            if (Array.isArray(previewClass)) {
                previewClass.forEach(className => preview.classList.add(className));
            }
            else {
                preview.classList.add(previewClass);
            }
        }
        return preview;
    }
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    _animatePreviewToPlaceholder() {
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        const placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        const duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(() => {
            return new Promise(resolve => {
                const handler = ((event) => {
                    if (!event || (event.target === this._preview && event.propertyName === 'transform')) {
                        this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                });
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                const timeout = setTimeout(handler, duration * 1.5);
                this._preview.addEventListener('transitionend', handler);
            });
        });
    }
    /** Creates an element that will be shown instead of the current element while dragging. */
    _createPlaceholderElement() {
        const placeholderConfig = this._placeholderTemplate;
        const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        let placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
            this._placeholderRef.detectChanges();
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    }
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    _getPointerPositionInElement(referenceElement, event) {
        const elementRect = this._rootElement.getBoundingClientRect();
        const handleElement = referenceElement === this._rootElement ? null : referenceElement;
        const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        const point = isTouchEvent(event) ? event.targetTouches[0] : event;
        const scrollPosition = this._getViewportScrollPosition();
        const x = point.pageX - referenceRect.left - scrollPosition.left;
        const y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    }
    /** Determines the point of the page that was touched by the user. */
    _getPointerPositionOnPage(event) {
        const scrollPosition = this._getViewportScrollPosition();
        const point = isTouchEvent(event) ?
            // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
            // to have a value, but Firefox in device emulation mode has a bug where both can be empty
            // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
            // throwing an error. The value returned here will be incorrect, but since this only
            // breaks inside a developer tool and the value is only used for secondary information,
            // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
            (event.touches[0] || event.changedTouches[0] || { pageX: 0, pageY: 0 }) : event;
        const x = point.pageX - scrollPosition.left;
        const y = point.pageY - scrollPosition.top;
        // if dragging SVG element, try to convert from the screen coordinate system to the SVG
        // coordinate system
        if (this._ownerSVGElement) {
            const svgMatrix = this._ownerSVGElement.getScreenCTM();
            if (svgMatrix) {
                const svgPoint = this._ownerSVGElement.createSVGPoint();
                svgPoint.x = x;
                svgPoint.y = y;
                return svgPoint.matrixTransform(svgMatrix.inverse());
            }
        }
        return { x, y };
    }
    /** Gets the pointer position on the page, accounting for any position constraints. */
    _getConstrainedPointerPosition(point) {
        const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        let { x, y } = this.constrainPosition ? this.constrainPosition(point, this) : point;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            const { x: pickupX, y: pickupY } = this._pickupPositionInElement;
            const boundaryRect = this._boundaryRect;
            const previewRect = this._previewRect;
            const minY = boundaryRect.top + pickupY;
            const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            const minX = boundaryRect.left + pickupX;
            const maxX = boundaryRect.right - (previewRect.width - pickupX);
            x = clamp(x, minX, maxX);
            y = clamp(y, minY, maxY);
        }
        return { x, y };
    }
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    _updatePointerDirectionDelta(pointerPositionOnPage) {
        const { x, y } = pointerPositionOnPage;
        const delta = this._pointerDirectionDelta;
        const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        const changeX = Math.abs(x - positionSinceLastChange.x);
        const changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    }
    /** Toggles the native drag interactions, based on how many handles are registered. */
    _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles) {
            return;
        }
        const shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    }
    /** Removes the manually-added event listeners from the root element. */
    _removeRootElementListeners(element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    }
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    _applyRootElementTransform(x, y) {
        const transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    }
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    _getDragDistance(currentPosition) {
        const pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    }
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = undefined;
        this._parentPositions.clear();
    }
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    _containInsideBoundaryOnResize() {
        let { x, y } = this._passiveTransform;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        const boundaryRect = this._boundaryElement.getBoundingClientRect();
        const elementRect = this._rootElement.getBoundingClientRect();
        // It's possible that the element got hidden away after dragging (e.g. by switching to a
        // different tab). Don't do anything in this case so we don't clear the user's position.
        if ((boundaryRect.width === 0 && boundaryRect.height === 0) ||
            (elementRect.width === 0 && elementRect.height === 0)) {
            return;
        }
        const leftOverflow = boundaryRect.left - elementRect.left;
        const rightOverflow = elementRect.right - boundaryRect.right;
        const topOverflow = boundaryRect.top - elementRect.top;
        const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y, x });
        }
    }
    /** Gets the drag start delay, based on the event type. */
    _getDragStartDelay(event) {
        const value = this.dragStartDelay;
        if (typeof value === 'number') {
            return value;
        }
        else if (isTouchEvent(event)) {
            return value.touch;
        }
        return value ? value.mouse : 0;
    }
    /** Updates the internal state of the draggable element when scrolling has occurred. */
    _updateOnScroll(event) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
            const target = event.target;
            // ClientRect dimensions are based on the scroll position of the page and its parent node so
            // we have to update the cached boundary ClientRect if the user has scrolled. Check for
            // the `document` specifically since IE doesn't support `contains` on it.
            if (this._boundaryRect && (target === this._document ||
                (target !== this._boundaryElement && target.contains(this._boundaryElement)))) {
                adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
            }
            this._pickupPositionOnPage.x += scrollDifference.left;
            this._pickupPositionOnPage.y += scrollDifference.top;
            // If we're in free drag mode, we have to update the active transform, because
            // it isn't relative to the viewport like the preview inside a drop list.
            if (!this._dropContainer) {
                this._activeTransform.x -= scrollDifference.left;
                this._activeTransform.y -= scrollDifference.top;
                this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
            }
        }
    }
    /** Gets the scroll position of the viewport. */
    _getViewportScrollPosition() {
        const cachedPosition = this._parentPositions.positions.get(this._document);
        return cachedPosition ? cachedPosition.scrollPosition :
            this._viewportRuler.getViewportScrollPosition();
    }
}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/** Clamps a value between a minimum and a maximum. */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param node Node to be removed.
 */
function removeNode(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
/** Determines whether an event is a touch event. */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/** Gets the element into which the drag preview should be inserted. */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */
function getRootNode(viewRef, _document) {
    const rootNodes = viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return rootNodes[0];
    }
    const wrapper = _document.createElement('div');
    rootNodes.forEach(node => wrapper.appendChild(node));
    return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */
function matchElementSize(target, sourceRect) {
    target.style.width = `${sourceRect.width}px`;
    target.style.height = `${sourceRect.height}px`;
    target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
function moveItemInArray(array, fromIndex, toIndex) {
    const from = clamp$1(fromIndex, array.length - 1);
    const to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    const target = array[from];
    const delta = to < from ? -1 : 1;
    for (let i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    const from = clamp$1(currentIndex, currentArray.length - 1);
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/** Clamps a number between zero and a maximum. */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 */
const AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */
class DropListRef {
    constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /** Whether starting a dragging sequence from this container is disabled. */
        this.disabled = false;
        /** Whether sorting items within the list is disabled. */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = () => true;
        /** Emits right before dragging has started. */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user drops an item inside the container. */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Whether an item in the list is being dragged. */
        this._isDragging = false;
        /** Cache of the dimensions of all the items inside the container. */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as well as what direction
         * the pointer was moving in when the swap occured and whether the user's pointer continued to
         * overlap with the swapped item after the swapping occurred.
         */
        this._previousSwap = { drag: null, delta: 0, overlaps: false };
        /** Drop lists that are connected to the current one. */
        this._siblings = [];
        /** Direction in which the list is oriented. */
        this._orientation = 'vertical';
        /** Connected siblings that currently have a dragged item. */
        this._activeSiblings = new Set();
        /** Layout direction of the drop list. */
        this._direction = 'ltr';
        /** Subscription to the window being scrolled. */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /** Vertical direction in which the list is currently scrolling. */
        this._verticalScrollDirection = 0 /* NONE */;
        /** Horizontal direction in which the list is currently scrolling. */
        this._horizontalScrollDirection = 0 /* NONE */;
        /** Used to signal to the current auto-scroll sequence when to stop. */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
        this._cachedShadowRoot = null;
        /** Starts the interval that'll auto-scroll the element. */
        this._startScrollInterval = () => {
            this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._stopScrollTimers))
                .subscribe(() => {
                const node = this._scrollNode;
                if (this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            });
        };
        this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(element);
        this._document = _document;
        this.withScrollableParents([this.element]);
        _dragDropRegistry.registerDropContainer(this);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
    }
    /** Removes the drop list functionality from the DOM element. */
    dispose() {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._viewportScrollSubscription.unsubscribe();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = null;
        this._parentPositions.clear();
        this._dragDropRegistry.removeDropContainer(this);
    }
    /** Whether an item from this list is currently being dragged. */
    isDragging() {
        return this._isDragging;
    }
    /** Starts dragging an item. */
    start() {
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        this.beforeStarted.next();
        this._isDragging = true;
        // We need to disable scroll snapping while the user is dragging, because it breaks automatic
        // scrolling. The browser seems to round the value based on the snapping points which means
        // that we can't increment/decrement the scroll position.
        this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
        styles.scrollSnapType = styles.msScrollSnapType = 'none';
        this._cacheItems();
        this._siblings.forEach(sibling => sibling._startReceiving(this));
        this._viewportScrollSubscription.unsubscribe();
        this._listenToScrollEvents();
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param index Index at which the item entered. If omitted, the container will try to figure it
     *   out automatically.
     */
    enter(item, pointerX, pointerY, index) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        let newIndex;
        if (index == null) {
            newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
            if (newIndex === -1) {
                // We use the coordinates of where the item entered the drop
                // zone to figure out at which index it should be inserted.
                newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
            }
        }
        else {
            newIndex = index;
        }
        const activeDraggables = this._activeDraggables;
        const currentIndex = activeDraggables.indexOf(item);
        const placeholder = item.getPlaceholderElement();
        let newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            const element = newPositionReference.getRootElement();
            element.parentElement.insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else if (this._shouldEnterAsFirstChild(pointerX, pointerY)) {
            const reference = activeDraggables[0].getRootElement();
            reference.parentNode.insertBefore(placeholder, reference);
            activeDraggables.unshift(item);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed and also parent rects.
        this._cacheItemPositions();
        this._cacheParentPositions();
        this.entered.next({ item, container: this, currentIndex: this.getItemIndex(item) });
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    exit(item) {
        this._reset();
        this.exited.next({ item, container: this });
    }
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param distance Distance the user has dragged since the start of the dragging sequence.
     * @param previousIndex Index of the item when dragging started.
     *
     * @breaking-change 11.0.0 `previousIndex` parameter to become required.
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer, distance, previousIndex) {
        this._reset();
        // @breaking-change 11.0.0 Remove this fallback logic once `previousIndex` is a required param.
        if (previousIndex == null) {
            previousIndex = previousContainer.getItemIndex(item);
        }
        this.dropped.next({ item,
            currentIndex,
            previousIndex,
            container: this,
            previousContainer,
            isPointerOverContainer,
            distance
        });
    }
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    withItems(items) {
        const previousItems = this._draggables;
        this._draggables = items;
        items.forEach(item => item._withDropContainer(this));
        if (this.isDragging()) {
            const draggedItems = previousItems.filter(item => item.isDragging());
            // If all of the items being dragged were removed
            // from the list, abort the current drag sequence.
            if (draggedItems.every(item => items.indexOf(item) === -1)) {
                this._reset();
            }
            else {
                this._cacheItems();
            }
        }
        return this;
    }
    /** Sets the layout direction of the drop list. */
    withDirection(direction) {
        this._direction = direction;
        return this;
    }
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    connectedTo(connectedTo) {
        this._siblings = connectedTo.slice();
        return this;
    }
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    withOrientation(orientation) {
        this._orientation = orientation;
        return this;
    }
    /**
     * Sets which parent elements are can be scrolled while the user is dragging.
     * @param elements Elements that can be scrolled.
     */
    withScrollableParents(elements) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        // We always allow the current element to be scrollable
        // so we need to ensure that it's in the array.
        this._scrollableElements =
            elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
        return this;
    }
    /** Gets the scrollable parents that are registered with this drop container. */
    getScrollableParents() {
        return this._scrollableElements;
    }
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    getItemIndex(item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        const items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, currentItem => currentItem.drag === item);
    }
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    isReceiving() {
        return this._activeSiblings.size > 0;
    }
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    _sortItem(item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled ||
            !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
            return;
        }
        const siblings = this._itemPositions;
        const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        const isHorizontal = this._orientation === 'horizontal';
        const currentIndex = findIndex(siblings, currentItem => currentItem.drag === item);
        const siblingAtNewPosition = siblings[newIndex];
        const currentPosition = siblings[currentIndex].clientRect;
        const newPosition = siblingAtNewPosition.clientRect;
        const delta = currentIndex > newIndex ? 1 : -1;
        // How many pixels the item's placeholder should be offset.
        const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        const oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item
        });
        siblings.forEach((sibling, index) => {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            const isDraggedItem = sibling.drag === item;
            const offset = isDraggedItem ? itemOffset : siblingOffset;
            const elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = `translate3d(${Math.round(sibling.offset)}px, 0, 0)`;
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = `translate3d(0, ${Math.round(sibling.offset)}px, 0)`;
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        });
        // Note that it's important that we do this after the client rects have been adjusted.
        this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    }
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param pointerX User's pointer position along the x axis.
     * @param pointerY User's pointer position along the y axis.
     */
    _startScrollingIfNecessary(pointerX, pointerY) {
        if (this.autoScrollDisabled) {
            return;
        }
        let scrollNode;
        let verticalScrollDirection = 0 /* NONE */;
        let horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling any of the parent containers.
        this._parentPositions.positions.forEach((position, element) => {
            // We have special handling for the `document` below. Also this would be
            // nicer with a  for...of loop, but it requires changing a compiler flag.
            if (element === this._document || !position.clientRect || scrollNode) {
                return;
            }
            if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
                [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);
                if (verticalScrollDirection || horizontalScrollDirection) {
                    scrollNode = element;
                }
            }
        });
        // Otherwise check if we can start scrolling the viewport.
        if (!verticalScrollDirection && !horizontalScrollDirection) {
            const { width, height } = this._viewportRuler.getViewportSize();
            const clientRect = { width, height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                this._ngZone.runOutsideAngular(this._startScrollInterval);
            }
            else {
                this._stopScrolling();
            }
        }
    }
    /** Stops any currently-running auto-scroll sequences. */
    _stopScrolling() {
        this._stopScrollTimers.next();
    }
    /** Caches the positions of the configured scrollable parents. */
    _cacheParentPositions() {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        this._parentPositions.cache(this._scrollableElements);
        // The list element is always in the `scrollableElements`
        // so we can take advantage of the cached `ClientRect`.
        this._clientRect = this._parentPositions.positions.get(element).clientRect;
    }
    /** Refreshes the position cache of the items and sibling containers. */
    _cacheItemPositions() {
        const isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map(drag => {
            const elementToMeasure = drag.getVisibleElement();
            return { drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        }).sort((a, b) => {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        });
    }
    /** Resets the container to its initial state. */
    _reset() {
        this._isDragging = false;
        const styles = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element).style;
        styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach(item => {
            const rootElement = item.getRootElement();
            if (rootElement) {
                rootElement.style.transform = '';
            }
        });
        this._siblings.forEach(sibling => sibling._stopReceiving(this));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._previousSwap.overlaps = false;
        this._stopScrolling();
        this._viewportScrollSubscription.unsubscribe();
        this._parentPositions.clear();
    }
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    _getSiblingOffsetPx(currentIndex, siblings, delta) {
        const isHorizontal = this._orientation === 'horizontal';
        const currentPosition = siblings[currentIndex].clientRect;
        const immediateSibling = siblings[currentIndex + delta * -1];
        let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            const start = isHorizontal ? 'left' : 'top';
            const end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    }
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    _getItemOffsetPx(currentPosition, newPosition, delta) {
        const isHorizontal = this._orientation === 'horizontal';
        let itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    }
    /**
     * Checks if pointer is entering in the first position
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     */
    _shouldEnterAsFirstChild(pointerX, pointerY) {
        if (!this._activeDraggables.length) {
            return false;
        }
        const itemPositions = this._itemPositions;
        const isHorizontal = this._orientation === 'horizontal';
        // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
        // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
        const reversed = itemPositions[0].drag !== this._activeDraggables[0];
        if (reversed) {
            const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
            return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
        }
        else {
            const firstItemRect = itemPositions[0].clientRect;
            return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
        }
    }
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
        const isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, ({ drag, clientRect }, _, array) => {
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                const direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, their cursor hasn't left
                // the item after we made the swap, and they didn't change the direction in which they're
                // dragging, we don't consider it a direction swap.
                if (drag === this._previousSwap.drag && this._previousSwap.overlaps &&
                    direction === this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
        });
    }
    /** Caches the current items in the list and their positions. */
    _cacheItems() {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheParentPositions();
    }
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    _isOverContainer(x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    }
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    _getSiblingContainerFromPosition(item, x, y) {
        return this._siblings.find(sibling => sibling._canReceive(item, x, y));
    }
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    _canReceive(item, x, y) {
        if (!isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
            return false;
        }
        const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    }
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    _startReceiving(sibling) {
        const activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheParentPositions();
            this._listenToScrollEvents();
        }
    }
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    _stopReceiving(sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    }
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     */
    _listenToScrollEvents() {
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(event => {
            if (this.isDragging()) {
                const scrollDifference = this._parentPositions.handleScroll(event);
                if (scrollDifference) {
                    // Since we know the amount that the user has scrolled we can shift all of the
                    // client rectangles ourselves. This is cheaper than re-measuring everything and
                    // we can avoid inconsistent behavior where we might be measuring the element before
                    // its position has changed.
                    this._itemPositions.forEach(({ clientRect }) => {
                        adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
                    });
                    // We need two loops for this, because we want all of the cached
                    // positions to be up-to-date before we re-sort the item.
                    this._itemPositions.forEach(({ drag }) => {
                        if (this._dragDropRegistry.isDragging(drag)) {
                            // We need to re-sort the item manually, because the pointer move
                            // events won't be dispatched while the user is scrolling.
                            drag._sortFromLastPointerPosition();
                        }
                    });
                }
            }
            else if (this.isReceiving()) {
                this._cacheParentPositions();
            }
        });
    }
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     */
    _getShadowRoot() {
        if (!this._cachedShadowRoot) {
            const shadowRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["_getShadowRoot"])(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(this.element));
            this._cachedShadowRoot = shadowRoot || this._document;
        }
        return this._cachedShadowRoot;
    }
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @param array Array in which to look for matches.
 * @param predicate Function used to determine whether an item is a match.
 */
function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Increments the vertical scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        node.scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        node.scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param node Node whose scroll position should change.
 * @param amount Amount of pixels that the `node` should be scrolled.
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        node.scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        node.scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    const { top, bottom, height } = clientRect;
    const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    const { left, right, width } = clientRect;
    const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    let verticalScrollDirection = 0 /* NONE */;
    let horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        const scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        const scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
class DragDropRegistry {
    constructor(_ngZone, _document) {
        this._ngZone = _ngZone;
        /** Registered drop container instances. */
        this._dropInstances = new Set();
        /** Registered drag item instances. */
        this._dragInstances = new Set();
        /** Drag item instances that are currently being dragged. */
        this._activeDragInstances = new Set();
        /** Keeps track of the event listeners that we've bound to the `document`. */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the viewport has been scrolled while the user is dragging an item. */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (event) => {
            if (this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        /** Event listener for `touchmove` that is bound even if no dragging is happening. */
        this._persistentTouchmoveListener = (event) => {
            if (this._activeDragInstances.size) {
                event.preventDefault();
                this.pointerMove.next(event);
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    registerDropContainer(drop) {
        if (!this._dropInstances.has(drop)) {
            this._dropInstances.add(drop);
        }
    }
    /** Adds a drag item instance to the registry. */
    registerDragItem(drag) {
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(() => {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                this._document.addEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
            });
        }
    }
    /** Removes a drop container from the registry. */
    removeDropContainer(drop) {
        this._dropInstances.delete(drop);
    }
    /** Removes a drag item instance from the registry. */
    removeDragItem(drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
        }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    startDragging(drag, event) {
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            const isTouchEvent = event.type.startsWith('touch');
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(isTouchEvent ? 'touchend' : 'mouseup', {
                handler: (e) => this.pointerUp.next(e),
                options: true
            })
                .set('scroll', {
                handler: (e) => this.scroll.next(e),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            // We don't have to bind a move event for touch drag sequences, because
            // we already have a persistent global one bound from `registerDragItem`.
            if (!isTouchEvent) {
                this._globalListeners.set('mousemove', {
                    handler: (e) => this.pointerMove.next(e),
                    options: activeCapturingEventOptions
                });
            }
            this._ngZone.runOutsideAngular(() => {
                this._globalListeners.forEach((config, name) => {
                    this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    }
    /** Stops dragging a drag item instance. */
    stopDragging(drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    }
    /** Gets whether a drag item instance is currently being dragged. */
    isDragging(drag) {
        return this._activeDragInstances.has(drag);
    }
    ngOnDestroy() {
        this._dragInstances.forEach(instance => this.removeDragItem(instance));
        this._dropInstances.forEach(instance => this.removeDropContainer(instance));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    }
    /** Clears out the global event listeners from the `document`. */
    _clearGlobalListeners() {
        this._globalListeners.forEach((config, name) => {
            this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    }
}
DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) { return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
DragDropRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
DragDropRegistry.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default configuration to be used when creating a `DragRef`. */
const DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    createDrag(element, config = DEFAULT_CONFIG) {
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    createDropList(element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
}
DragDrop.ɵfac = function DragDrop_Factory(t) { return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DragDropRegistry)); };
DragDrop.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
DragDrop.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] },
    { type: DragDropRegistry }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDrop, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] }, { type: DragDropRegistry }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
class CdkDropListGroup {
    constructor() {
        /** Drop lists registered inside the group. */
        this._items = new Set();
        this._disabled = false;
    }
    /** Whether starting a dragging sequence from inside this group is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    ngOnDestroy() {
        this._items.clear();
    }
}
CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) { return new (t || CdkDropListGroup)(); };
CdkDropListGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropListGroup, selectors: [["", "cdkDropListGroup", ""]], inputs: { disabled: ["cdkDropListGroupDisabled", "disabled"] }, exportAs: ["cdkDropListGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DROP_LIST_GROUP, useExisting: CdkDropListGroup }])] });
CdkDropListGroup.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListGroupDisabled',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropListGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropListGroup]',
                exportAs: 'cdkDropListGroup',
                providers: [{ provide: CDK_DROP_LIST_GROUP, useExisting: CdkDropListGroup }]
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListGroupDisabled']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CDK_DRAG_CONFIG');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique ids for drop zones. */
let _uniqueIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDropList');
const ɵ0 = undefined;
/** Container that wraps a set of draggable items. */
class CdkDropList {
    constructor(
    /** Element that the drop list is attached to. */
    element, dragDrop, _changeDetectorRef, _dir, _group, 
    /**
     * @deprecated _scrollDispatcher parameter to become required.
     * @breaking-change 11.0.0
     */
    _scrollDispatcher, config) {
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        this._scrollDispatcher = _scrollDispatcher;
        /** Emits when the list has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = () => true;
        /** Emits when the user drops an item inside the container. */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */
        this._unsortedItems = new Set();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = (drag, drop) => {
            return this.enterPredicate(drag.data, drop.data);
        };
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    /** Whether starting a dragging sequence from this container is disabled. */
    get disabled() {
        return this._disabled || (!!this._group && this._group.disabled);
    }
    set disabled(value) {
        // Usually we sync the directive and ref state right before dragging starts, in order to have
        // a single point of failure and to avoid having to use setters for everything. `disabled` is
        // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
        // the user in a disabled state, so we also need to sync it as it's being set.
        this._dropListRef.disabled = this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    /** Registers an items with the drop list. */
    addItem(item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /** Removes an item from the drop list. */
    removeItem(item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /** Gets the registered items in the list, sorted by their position in the DOM. */
    getSortedItems() {
        return Array.from(this._unsortedItems).sort((a, b) => {
            const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
    }
    ngOnDestroy() {
        const index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    _setupInputSyncSubscription(ref) {
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
                .subscribe(value => ref.withDirection(value));
        }
        ref.beforeStarted.subscribe(() => {
            const siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(this.connectedTo).map(drop => {
                if (typeof drop === 'string') {
                    const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);
                    if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                        console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
                    }
                    return correspondingDropList;
                }
                return drop;
            });
            if (this._group) {
                this._group._items.forEach(drop => {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            // @breaking-change 11.0.0 Remove null check for _scrollDispatcher once it's required.
            if (!this._scrollableParentsResolved && this._scrollDispatcher) {
                const scrollableParents = this._scrollDispatcher
                    .getAncestorScrollContainers(this.element)
                    .map(scrollable => scrollable.getElementRef().nativeElement);
                this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                this._scrollableParentsResolved = true;
            }
            ref.disabled = this.disabled;
            ref.lockAxis = this.lockAxis;
            ref.sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.sortingDisabled);
            ref.autoScrollDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(this.autoScrollDisabled);
            ref
                .connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef))
                .withOrientation(this.orientation);
        });
    }
    /** Handles events from the underlying DropListRef. */
    _handleEvents(ref) {
        ref.beforeStarted.subscribe(() => {
            this._syncItemsWithRef();
            this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(event => {
            this.entered.emit({
                container: this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(event => {
            this.exited.emit({
                container: this,
                item: event.item.data
            });
            this._changeDetectorRef.markForCheck();
        });
        ref.sorted.subscribe(event => {
            this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Assigns the default input values based on a provided config object. */
    _assignDefaults(config) {
        const { lockAxis, draggingDisabled, sortingDisabled, listAutoScrollDisabled, listOrientation } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    }
    /** Syncs up the registered drag items with underlying drop list ref. */
    _syncItemsWithRef() {
        this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
    }
}
CdkDropList.ɵfac = function CdkDropList_Factory(t) { return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8)); };
CdkDropList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDropList, selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]], hostAttrs: [1, "cdk-drop-list"], hostVars: 7, hostBindings: function CdkDropList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    } }, inputs: { connectedTo: ["cdkDropListConnectedTo", "connectedTo"], id: "id", enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"], disabled: ["cdkDropListDisabled", "disabled"], sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"], autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"], orientation: ["cdkDropListOrientation", "orientation"], lockAxis: ["cdkDropListLockAxis", "lockAxis"], data: ["cdkDropListData", "data"] }, outputs: { dropped: "cdkDropListDropped", entered: "cdkDropListEntered", exited: "cdkDropListExited", sorted: "cdkDropListSorted" }, exportAs: ["cdkDropList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // Prevent child drop lists from picking up the same group as their parent.
            { provide: CDK_DROP_LIST_GROUP, useValue: ɵ0 },
            { provide: CDK_DROP_LIST, useExisting: CdkDropList },
        ])] });
/** Keeps track of the drop lists that are currently on the page. */
CdkDropList._dropLists = [];
CdkDropList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DROP_LIST_GROUP,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] }
];
CdkDropList.propDecorators = {
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListConnectedTo',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListData',] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListOrientation',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListLockAxis',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListDisabled',] }],
    sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListSortingDisabled',] }],
    enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListEnterPredicate',] }],
    autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListDropped',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListExited',] }],
    sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDropListSorted',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDropList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDropList], cdk-drop-list',
                exportAs: 'cdkDropList',
                providers: [
                    // Prevent child drop lists from picking up the same group as their parent.
                    { provide: CDK_DROP_LIST_GROUP, useValue: ɵ0 },
                    { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                ],
                host: {
                    'class': 'cdk-drop-list',
                    '[id]': 'id',
                    '[class.cdk-drop-list-disabled]': 'disabled',
                    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: CdkDropListGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DROP_LIST_GROUP]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }]; }, { connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListConnectedTo']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enterPredicate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListEnterPredicate']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListDropped']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListExited']
        }], sorted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDropListSorted']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListDisabled']
        }], sortingDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListSortingDisabled']
        }], autoScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListAutoScrollDisabled']
        }], orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListOrientation']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListLockAxis']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDropListData']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */
class CdkDragHandle {
    constructor(element, parentDrag) {
        this.element = element;
        /** Emits when the state of the handle has changed. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
    }
    /** Whether starting to drag through this handle is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._stateChanges.next(this);
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) { return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12)); };
CdkDragHandle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragHandle, selectors: [["", "cdkDragHandle", ""]], hostAttrs: [1, "cdk-drag-handle"], inputs: { disabled: ["cdkDragHandleDisabled", "disabled"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DRAG_HANDLE, useExisting: CdkDragHandle }])] });
CdkDragHandle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
CdkDragHandle.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragHandleDisabled',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragHandle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDragHandle]',
                host: {
                    'class': 'cdk-drag-handle'
                },
                providers: [{ provide: CDK_DRAG_HANDLE, useExisting: CdkDragHandle }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_PARENT]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragHandleDisabled']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */
class CdkDragPlaceholder {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) { return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPlaceholder, selectors: [["ng-template", "cdkDragPlaceholder", ""]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DRAG_PLACEHOLDER, useExisting: CdkDragPlaceholder }])] });
CdkDragPlaceholder.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPlaceholder.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPlaceholder]',
                providers: [{ provide: CDK_DRAG_PLACEHOLDER, useExisting: CdkDragPlaceholder }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
class CdkDragPreview {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    /** Whether the preview should preserve the same size as the item that is being dragged. */
    get matchSize() { return this._matchSize; }
    set matchSize(value) { this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
}
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) { return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkDragPreview.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDragPreview, selectors: [["ng-template", "cdkDragPreview", ""]], inputs: { matchSize: "matchSize", data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DRAG_PREVIEW, useExisting: CdkDragPreview }])] });
CdkDragPreview.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];
CdkDragPreview.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    matchSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDragPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[cdkDragPreview]',
                providers: [{ provide: CDK_DRAG_PREVIEW, useExisting: CdkDragPreview }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Element that can be moved inside a CdkDropList container. */
class CdkDrag {
    constructor(
    /** Element that the draggable is attached to. */
    element, 
    /** Droppable container that the draggable is a part of. */
    dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle) {
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._selfHandle = _selfHandle;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Emits when the user starts dragging the item. */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((observer) => {
            const subscription = this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(movedEvent => ({
                source: this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }))).subscribe(observer);
            return () => {
                subscription.unsubscribe();
            };
        });
        this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ?
                config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ?
                config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex
        });
        this._dragRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.
        if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);
            dropContainer.addItem(this);
        }
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    /** Whether starting to drag this element is disabled. */
    get disabled() {
        return this._disabled || (this.dropContainer && this.dropContainer.disabled);
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
    }
    /** Returns the root draggable element. */
    getRootElement() {
        return this._dragRef.getRootElement();
    }
    /** Resets a standalone drag item to its initial position. */
    reset() {
        this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
    }
    ngAfterViewInit() {
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
            .subscribe(() => {
            this._updateRootElement();
            // Listen for any newly-added handles.
            this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((handles) => {
                const childHandleElements = handles
                    .filter(handle => handle._parentDrag === this)
                    .map(handle => handle.element);
                // Usually handles are only allowed to be a descendant of the drag element, but if
                // the consumer defined a different drag root, we should allow the drag element
                // itself to be a handle too.
                if (this._selfHandle && this.rootElementSelector) {
                    childHandleElements.push(this.element);
                }
                this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((handles) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...handles.map(item => {
                    return item._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(item));
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(handleInstance => {
                // Enabled/disable the handle that changed in the DragRef.
                const dragRef = this._dragRef;
                const handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
            if (this.freeDragPosition) {
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
        });
    }
    ngOnChanges(changes) {
        const rootSelectorChange = changes['rootElementSelector'];
        const positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    }
    ngOnDestroy() {
        if (this.dropContainer) {
            this.dropContainer.removeItem(this);
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    }
    /** Syncs the root element with the `DragRef`. */
    _updateRootElement() {
        const element = this.element.nativeElement;
        const rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`cdkDrag must be attached to an element node. ` +
                `Currently attached to "${rootElement.nodeName}".`);
        }
        this._dragRef.withRootElement(rootElement || element);
    }
    /** Gets the boundary element, based on the `boundaryElement` value. */
    _getBoundaryElement() {
        const boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(boundary);
        if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
            !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    }
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    _syncInputs(ref) {
        ref.beforeStarted.subscribe(() => {
            if (!ref.isDragging()) {
                const dir = this._dir;
                const dragStartDelay = this.dragStartDelay;
                const placeholder = this._placeholderTemplate ? {
                    template: this._placeholderTemplate.templateRef,
                    context: this._placeholderTemplate.data,
                    viewContainer: this._viewContainerRef
                } : null;
                const preview = this._previewTemplate ? {
                    template: this._previewTemplate.templateRef,
                    context: this._previewTemplate.data,
                    matchSize: this._previewTemplate.matchSize,
                    viewContainer: this._viewContainerRef
                } : null;
                ref.disabled = this.disabled;
                ref.lockAxis = this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(dragStartDelay);
                ref.constrainPosition = this.constrainPosition;
                ref.previewClass = this.previewClass;
                ref
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    }
    /** Handles the events from the underlying `DragRef`. */
    _handleEvents(ref) {
        ref.started.subscribe(() => {
            this.started.emit({ source: this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.released.subscribe(() => {
            this.released.emit({ source: this });
        });
        ref.ended.subscribe(event => {
            this.ended.emit({ source: this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(event => {
            this.entered.emit({
                container: event.container.data,
                item: this,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(event => {
            this.exited.emit({
                container: event.container.data,
                item: this
            });
        });
        ref.dropped.subscribe(event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: this,
                distance: event.distance
            });
        });
    }
    /** Assigns the default input values based on a provided config object. */
    _assignDefaults(config) {
        const { lockAxis, dragStartDelay, constrainPosition, previewClass, boundaryElement, draggingDisabled, rootElementSelector } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.dragStartDelay = dragStartDelay || 0;
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
        if (constrainPosition) {
            this.constrainPosition = constrainPosition;
        }
        if (previewClass) {
            this.previewClass = previewClass;
        }
        if (boundaryElement) {
            this.boundaryElement = boundaryElement;
        }
        if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
        }
    }
}
CdkDrag.ɵfac = function CdkDrag_Factory(t) { return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10)); };
CdkDrag.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkDrag, selectors: [["", "cdkDrag", ""]], contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    } }, hostAttrs: [1, "cdk-drag"], hostVars: 4, hostBindings: function CdkDrag_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    } }, inputs: { disabled: ["cdkDragDisabled", "disabled"], dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"], lockAxis: ["cdkDragLockAxis", "lockAxis"], constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"], previewClass: ["cdkDragPreviewClass", "previewClass"], boundaryElement: ["cdkDragBoundary", "boundaryElement"], rootElementSelector: ["cdkDragRootElement", "rootElementSelector"], data: ["cdkDragData", "data"], freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"] }, outputs: { started: "cdkDragStarted", released: "cdkDragReleased", ended: "cdkDragEnded", entered: "cdkDragEntered", exited: "cdkDragExited", dropped: "cdkDragDropped", moved: "cdkDragMoved" }, exportAs: ["cdkDrag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
CdkDrag.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: CdkDragHandle, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_DRAG_HANDLE,] }] }
];
CdkDrag.propDecorators = {
    _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CDK_DRAG_HANDLE, { descendants: true },] }],
    _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CDK_DRAG_PREVIEW,] }],
    _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CDK_DRAG_PLACEHOLDER,] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragData',] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragLockAxis',] }],
    rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragRootElement',] }],
    boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragBoundary',] }],
    dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragStartDelay',] }],
    freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragFreeDragPosition',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragDisabled',] }],
    constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragConstrainPosition',] }],
    previewClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkDragPreviewClass',] }],
    started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragStarted',] }],
    released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragReleased',] }],
    ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEnded',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragExited',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragDropped',] }],
    moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['cdkDragMoved',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkDrag, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': 'cdk-drag',
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DROP_LIST]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_CONFIG]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: DragDrop }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: CdkDragHandle, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [CDK_DRAG_HANDLE]
            }] }]; }, { started: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragStarted']
        }], released: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragReleased']
        }], ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEnded']
        }], entered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragEntered']
        }], exited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragExited']
        }], dropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragDropped']
        }], moved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['cdkDragMoved']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragDisabled']
        }], dragStartDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragStartDelay']
        }], lockAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragLockAxis']
        }], constrainPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragConstrainPosition']
        }], previewClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragPreviewClass']
        }], boundaryElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragBoundary']
        }], rootElementSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragRootElement']
        }], _handles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CDK_DRAG_HANDLE, { descendants: true }]
        }], _previewTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PREVIEW]
        }], _placeholderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CDK_DRAG_PLACEHOLDER]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragData']
        }], freeDragPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cdkDragFreeDragPosition']
        }] }); })();
/** Gets the closest ancestor of an element that matches a selector. */
function getClosestMatchingAncestor(element, selector) {
    let currentElement = element.parentElement;
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            currentElement.msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class DragDropModule {
}
DragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DragDropModule });
DragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DragDropModule_Factory(t) { return new (t || DragDropModule)(); }, providers: [
        DragDrop,
    ], imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DragDropModule, { declarations: function () { return [CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
        CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollableModule"],
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=drag-drop.js.map

/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/clinic-details/clinic-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/clinic-details/clinic-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ClinicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicDetailsComponent", function() { return ClinicDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/Doctor/Profile/Connect_clinic"]; };
const _c1 = function () { return ["/Doctor/Profile"]; };
class ClinicDetailsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ClinicDetailsComponent.ɵfac = function ClinicDetailsComponent_Factory(t) { return new (t || ClinicDetailsComponent)(); };
ClinicDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicDetailsComponent, selectors: [["app-clinic-details"]], decls: 34, vars: 4, consts: [[1, "bg-white", "p-sm-3"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "100%"], [1, "row"], [1, "col-md-5", "col-lg-3", "offset-md-2"], [1, "mb-4", "h1", "font-weight-bold", "text-dark", "pb-5"], [1, "form-group"], ["for", "RegistrationNumber"], ["type", "text", "id", "RegistrationNumber", "placeholder", "1234 ", 1, "form-control"], ["for", "RegistrationCouncil"], ["type", "text", "id", "RegistrationCouncil", "placeholder", "", 1, "form-control"], ["type", "number", "id", "RegistrationCouncil", "placeholder", "", 1, "form-control"], [1, "mt-5", "mb-5"], ["type", "button", "routerLinkActive", "router-link-active", 1, "btn", "btn-outline-dark", "px-5", "h3", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], ["type", "button", "routerLinkActive", "router-link-active", 1, "btn", "btn-warning", "px-5", "h3", "butsetr", 3, "routerLink"], [1, "col-md-3", "col-lg-4", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"]], template: function ClinicDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Establishment basic details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Establishment name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Locality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contnue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Basic details about your practice helps patients reach you easily for appointment booking and inquiries.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jbGluaWMtZGV0YWlscy9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxccHJvZmlsZVxcY2xpbmljLWRldGFpbHNcXGNsaW5pYy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2NsaW5pYy1kZXRhaWxzL2NsaW5pYy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3Byb2ZpbGUvY2xpbmljLWRldGFpbHMvY2xpbmljLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcclxufVxyXG5cclxuLnRleHRjb2wge1xyXG4gICAgY29sb3I6ICMxNGFhOWI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjUwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXRzZXRyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59IiwiLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcbn1cblxuLnRleHRjb2wge1xuICBjb2xvcjogIzE0YWE5Yjtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idXRzZXRyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinic-details',
                templateUrl: './clinic-details.component.html',
                styleUrls: ['./clinic-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/clinic-location/clinic-location.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/clinic-location/clinic-location.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ClinicLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicLocationComponent", function() { return ClinicLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _consultant_details_consultant_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../consultant-details/consultant-details.component */ "./src/app/modules/doctor-dashbord/profile/consultant-details/consultant-details.component.ts");
/* harmony import */ var _clinic_timings_clinic_timings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../clinic-timings/clinic-timings.component */ "./src/app/modules/doctor-dashbord/profile/clinic-timings/clinic-timings.component.ts");












const _c0 = ["stepper"];
function ClinicLocationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Location");
} }
function ClinicLocationComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Details of consultant doctor");
} }
function ClinicLocationComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Establishment Timings");
} }
const _c1 = function () { return ["/Doctor/Profile"]; };
class ClinicLocationComponent {
    constructor(mainService, messageService, router, uploadService, formBuilder) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.router = router;
        this.uploadService = uploadService;
        this.formBuilder = formBuilder;
        this.items = [];
        this.getProfile();
    }
    ngOnInit() {
        this.profileForm = this.formBuilder.group({
            mobileNumber: [''],
            email: [''],
            landmark: [''],
        });
        this.secondFormGroup = this.formBuilder.group({});
        this.thirdFormGroup = this.formBuilder.group({});
    }
    getProfile() {
        this.mainService.getProfile().then(resData => {
            this.profileForm.patchValue(Object.assign(Object.assign({}, resData.data), { landmark: resData.data.location.landmark }));
            this.profileData = resData.data;
        }).catch(error => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    onSave(staper) {
        var data = Object.assign(Object.assign({}, this.profileForm.value), { location: {
                landmark: this.profileForm.value.landmark,
                address: this.profileData.location.address,
                state: this.profileData.location.state,
                city: this.profileData.location.city,
                pincode: this.profileData.location.pincode,
                country: this.profileData.location.country,
                isVerified: 'Yes'
            } });
        this.mainService.updateUserprofile(data).then(resData => {
            this.showToast('success', 'Profile', 'Profile updated successfully');
            staper.next();
        }).catch(error => {
            console.log("EditProfileComponent -> onSave -> error", error);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
}
ClinicLocationComponent.ɵfac = function ClinicLocationComponent_Factory(t) { return new (t || ClinicLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
ClinicLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicLocationComponent, selectors: [["app-clinic-location"]], viewQuery: function ClinicLocationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 50, vars: 13, consts: [[1, "custom-error", 3, "showTransformOptions"], ["labelPosition", "bottom", "linear", "", "mode", ""], ["stepper", ""], ["disableRipple", "true", 3, "stepControl"], ["matStepLabel", ""], [1, "bg-white", "p-sm-3"], [3, "formGroup"], [1, "container-fluid"], [1, "row"], [1, "col-md-5", "col-lg-3", "offset-md-2"], [1, "mb-2", 2, "font-size", "15px"], [1, "form-group"], ["for", "RegistrationNumber"], [1, "col-sm-12"], ["type", "text", "formControlName", "mobileNumber", "id", "RegistrationNumber", "placeholder", "+91 8989788988", "disabled", "true", 1, "form-control"], ["for", "email"], ["type", "text", "formControlName", "email", "id", "email", "disabled", "true", "placeholder", "example@gmail.com", 1, "form-control"], ["for", "landmark"], ["type", "text", "id", "landmark", "formControlName", "landmark", "placeholder", "Enter your address", 1, "form-control"], [1, "mt-5", "mb-5"], ["mat-raised-button", "", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "themeColorBtn", 2, "margin-left", "10px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-md-3", "col-lg-4", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [3, "stepper"]], template: function ClinicLocationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r969 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClinicLocationComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Street address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicLocationComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r969); const _r965 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSave(_r965); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Save and continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " This will help your patients to reach your establishment easily.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ClinicLocationComponent_ng_template_44_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-consultant-details", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ClinicLocationComponent_ng_template_48_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-clinic-timings", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r965 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTransformOptions", "translateX(100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepper", _r965);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepper", _r965);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _consultant_details_consultant_details_component__WEBPACK_IMPORTED_MODULE_9__["ConsultantDetailsComponent"], _clinic_timings_clinic_timings_component__WEBPACK_IMPORTED_MODULE_10__["ClinicTimingsComponent"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border-color: #c6d5e5;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.form-control-phone[_ngcontent-%COMP%] {\n  width: 58% !important;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jbGluaWMtbG9jYXRpb24vQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHByb2ZpbGVcXGNsaW5pYy1sb2NhdGlvblxcY2xpbmljLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2NsaW5pYy1sb2NhdGlvbi9jbGluaWMtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFFQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREVBLG1CQUFBOztBQUVBOztFQUVJLGNBQUE7QUNBSjs7QURFQTs7RUFFSSx5QkFBQTtBQ0NKOztBREVBOzs7O0VBTUksa0JBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLG1CQUFBO0VDRE47O0VER0U7Ozs7SUFJSSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNBTjtBQUNGOztBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3Byb2ZpbGUvY2xpbmljLWxvY2F0aW9uL2NsaW5pYy1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOGY2O1xyXG59XHJcblxyXG4udGV4dGNvbCB7XHJcbiAgICBjb2xvcjogIzE0YWE5YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzZkNWU1O1xyXG59XHJcblxyXG4uYnV0c2V0ciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1waG9uZSB7XHJcbiAgICB3aWR0aDogNTglICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogU3VjY2VzcyBzeWxpbmcgKi9cclxuXHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG59XHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjM7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xyXG4gICAgLy8gY29sb3I6ICNmMGZmZjM7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAucGFkZGluZ29ueHMge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbiAgICAubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4gICAgLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbiAgICAubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcclxuICAgICAgICBjb2xvcjogI2YwZmZmMztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgIH1cclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4iLCIuYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOGY2O1xufVxuXG4udGV4dGNvbCB7XG4gIGNvbG9yOiAjMTRhYTliO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXItY29sb3I6ICNjNmQ1ZTU7XG59XG5cbi5idXRzZXRyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLmZvcm0tY29udHJvbC1waG9uZSB7XG4gIHdpZHRoOiA1OCUgIWltcG9ydGFudDtcbn1cblxuLyogU3VjY2VzcyBzeWxpbmcgKi9cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3Zlcixcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhZGRpbmdvbnhzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICNmMGZmZjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinic-location',
                templateUrl: './clinic-location.component.html',
                styleUrls: ['./clinic-location.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/clinic-proof/clinic-proof.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/clinic-proof/clinic-proof.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ClinicProofComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicProofComponent", function() { return ClinicProofComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");










function ClinicProofComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "One file is Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicProofComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Uplopad is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClinicProofComponent {
    constructor(mainService, messageService, router, uploadService) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.router = router;
        this.uploadService = uploadService;
        this.items = [];
        this.getProfile();
    }
    getProfile() {
        this.mainService.getProfile().then(resData => {
            this.profileData = resData.data;
            this.establishmentProff = this.profileData.establishmentProff;
        }).catch(error => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    onSave() {
        if (this.establishmentProff.length === '') {
            return;
        }
        this.mainService.updateUserprofile({ establishmentProff: this.establishmentProff }).then(resData => {
            this.showToast('success', 'Profile', 'Profile updated successfully');
            this.stepper.next();
            this.router.navigate(['/Doctor/Profile/']);
        }).catch(error => {
            console.log("EditProfileComponent -> onSave -> error", error);
        });
    }
    browseFile(event) {
        const file = event.target.files;
        this.uploadService.upload(file).then(res => {
            this.establishmentProff = res.files[0];
        }).catch(error => {
            console.error('error', error);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
    ngOnInit() { }
}
ClinicProofComponent.ɵfac = function ClinicProofComponent_Factory(t) { return new (t || ClinicProofComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"])); };
ClinicProofComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicProofComponent, selectors: [["app-clinic-proof"]], inputs: { stepper: "stepper" }, decls: 42, vars: 5, consts: [[1, "bg-white", "p-sm-3"], [1, "row"], [1, "col-md-5", "col-lg-3", "offset-md-2"], [1, "mb-2", 2, "font-size", "15px"], [1, "border", "bgh", "m-auto"], [1, "img-fluid", 2, "padding", "0px", "width", "100%", "height", "150px", "background-color", "#eadfdf", 3, "src"], ["type", "file", 1, "d-none", 3, "change"], ["file", ""], [1, "btn", "border", "bg-white", "z-index", 2, "position", "absolute", "top", "0", "left", "0", "font-size", "1rem !important", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", 2, "margin", "0px"], ["class", "display-block text-center", 4, "ngIf"], ["class", "error-block display-block text-center", 4, "ngIf"], [1, "pt-2", 2, "font-size", "12px"], [1, "inside1"], ["mat-raised-button", "", "matStepperPrevious", ""], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "themeColorBtn", 2, "margin-left", "10px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-md-3", "col-lg-5", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [1, "display-block", "text-center"], [1, "error-block", "display-block", "text-center"]], template: function ClinicProofComponent_Template(rf, ctx) { if (rf & 1) {
        const _r964 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClinicProofComponent_Template_input_change_9_listener($event) { return ctx.browseFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicProofComponent_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r964); const _r961 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r961.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicProofComponent_div_13_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClinicProofComponent_div_14_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Please provide your Establishment ownership proof to verify your profile, so that no one else can get access to your information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Acceptable documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clinic registration proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Document for waste disposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tax receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicProofComponent_Template_button_click_32_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Save and continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 2.5M patients are looking for a doctor on WhealthyLife. Verify your credentials and reach out to them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.establishmentProff, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.establishmentProff);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.establishmentProff);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperPrevious"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.bgh[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  text-align: center;\n  position: relative;\n  background-color: #ccced424;\n}\n\n.inside1[_ngcontent-%COMP%] {\n  list-style: inside;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.error-block[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n\n.danger[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jbGluaWMtcHJvb2YvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHByb2ZpbGVcXGNsaW5pYy1wcm9vZlxcY2xpbmljLXByb29mLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2NsaW5pYy1wcm9vZi9jbGluaWMtcHJvb2YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0EsbUJBQUE7O0FBRUE7O0VBRUksY0FBQTtBQ0NKOztBRENBOztFQUVJLHlCQUFBO0FDRUo7O0FEQ0E7Ozs7RUFNSSxrQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksbUJBQUE7RUNBTjs7RURFRTs7OztJQUlJLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ0NOO0FBQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2NsaW5pYy1wcm9vZi9jbGluaWMtcHJvb2YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcclxufVxyXG5cclxuLnRleHRjb2wge1xyXG4gICAgY29sb3I6ICMxNGFhOWI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHNldHIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5iZ2gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2VkNDI0O1xyXG59XHJcblxyXG4uaW5zaWRlMSB7XHJcbiAgICBsaXN0LXN0eWxlOiBpbnNpZGU7XHJcbn1cclxuLyogU3VjY2VzcyBzeWxpbmcgKi9cclxuXHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG59XHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjM7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xyXG4gICAgLy8gICBjb2xvcjogI2YwZmZmMztcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnBhZGRpbmdvbnhzIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4gICAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuICAgIC5tYXQtZmFiLm1hdC1zdWNjZXNzLFxyXG4gICAgLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XHJcbiAgICAgICAgY29sb3I6ICNmMGZmZjM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4uZXJyb3ItYmxvY2sge1xyXG4gICAgY29sb3I6ICNlMzVhNDk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmRhbmdlcntcclxuICAgIGNvbG9yOiAjZTM1YTQ5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiIsIi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XG59XG5cbi50ZXh0Y29sIHtcbiAgY29sb3I6ICMxNGFhOWI7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYnV0c2V0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5iZ2gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NlZDQyNDtcbn1cblxuLmluc2lkZTEge1xuICBsaXN0LXN0eWxlOiBpbnNpZGU7XG59XG5cbi8qIFN1Y2Nlc3Mgc3lsaW5nICovXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzE1NTcyNDtcbn1cblxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYWRkaW5nb254cyB7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZhYi5tYXQtc3VjY2Vzcyxcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjZjBmZmYzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICB9XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uZXJyb3ItYmxvY2sge1xuICBjb2xvcjogI2UzNWE0OTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6ICNlMzVhNDk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicProofComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinic-proof',
                templateUrl: './clinic-proof.component.html',
                styleUrls: ['./clinic-proof.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/clinic-timings/clinic-timings.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/clinic-timings/clinic-timings.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ClinicTimingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicTimingsComponent", function() { return ClinicTimingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/doctor-profile.service */ "./src/app/services/doctor-profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");














function ClinicTimingsComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicTimingsComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r982 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r982.Day, " ");
} }
function ClinicTimingsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Morning Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicTimingsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "06:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "06:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "07:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "07:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "08:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "08:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "09:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "11:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "11:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "11:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "06:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "06:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "07:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "07:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "08:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "08:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "09:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "09:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "10:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "10:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "11:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "11:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "11:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r984 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "MorStart", i_r984, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "MorEnd", i_r984, "");
} }
function ClinicTimingsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Afternoon Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicTimingsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "12:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "12:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "13:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "13:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "14:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "14:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "15:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "16:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "16:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "17:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "17:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "17:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "12:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "13:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "13:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "14:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "14:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "15:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "15:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "16:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "16:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "17:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "17:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "17:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r986 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "AftStart", i_r986, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "AftEnd", i_r986, "");
} }
function ClinicTimingsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicTimingsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "18:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "19:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "20:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "20:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "21:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "21:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "22:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "22:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "23:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "23:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "23:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "18:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "19:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "20:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "20:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "21:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "21:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "22:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "22:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "23:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "23:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "23:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r988 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "EveStart", i_r988, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "EveEnd", i_r988, "");
} }
function ClinicTimingsComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Night Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicTimingsComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 00:00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "00:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "01:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "02:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "02:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "03:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "03:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "04:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "04:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "05:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "05:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "05:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "00:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "01:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "01:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "02:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "02:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "03:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "03:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "04:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "04:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "05:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "05:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "05:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r990 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "NigStart", i_r990, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "NigEnd", i_r990, "");
} }
function ClinicTimingsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 86);
} }
function ClinicTimingsComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 87);
} }
class ClinicTimingsComponent {
    constructor(mainService, messageService, UserService, DoctorProfileService, fb) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.UserService = UserService;
        this.DoctorProfileService = DoctorProfileService;
        this.fb = fb;
        this.columns = ['Day', 'MorningSlot', 'AfternoonSlots', 'EveningSlots', 'NightSlots'];
        this.dataSource = ELEMENT_DATA;
        this.dMO = false;
        this.dTU = false;
        this.dWE = false;
        this.dTH = false;
        this.dFR = false;
        this.dSA = false;
        this.dSU = false;
        this.timeSloats = [];
        this.TimeSloat2 = [];
        this.SlotForm = this.fb.group({
            MorStart0: [""],
            MorStart1: [""],
            MorStart2: [""],
            MorStart3: [""],
            MorStart4: [""],
            MorStart5: [""],
            MorStart6: [""],
            MorEnd0: [""],
            MorEnd1: [""],
            MorEnd2: [""],
            MorEnd3: [""],
            MorEnd4: [""],
            MorEnd5: [""],
            MorEnd6: [""],
            AftStart0: [""],
            AftStart1: [""],
            AftStart2: [""],
            AftStart3: [""],
            AftStart4: [""],
            AftStart5: [""],
            AftStart6: [""],
            AftEnd0: [""],
            AftEnd1: [""],
            AftEnd2: [""],
            AftEnd3: [""],
            AftEnd4: [""],
            AftEnd5: [""],
            AftEnd6: [""],
            EveStart0: [""],
            EveStart1: [""],
            EveStart2: [""],
            EveStart3: [""],
            EveStart4: [""],
            EveStart5: [""],
            EveStart6: [""],
            EveEnd0: [""],
            EveEnd1: [""],
            EveEnd2: [""],
            EveEnd3: [""],
            EveEnd4: [""],
            EveEnd5: [""],
            EveEnd6: [""],
            NigStart0: [""],
            NigStart1: [""],
            NigStart2: [""],
            NigStart3: [""],
            NigStart4: [""],
            NigStart5: [""],
            NigStart6: [""],
            NigEnd0: [""],
            NigEnd1: [""],
            NigEnd2: [""],
            NigEnd3: [""],
            NigEnd4: [""],
            NigEnd5: [""],
            NigEnd6: [""],
        });
        this.getProfile();
    }
    ngOnInit() {
    }
    getProfile() {
        this.mainService.getProfile().then(resData => {
            this.profile = resData.data;
            console.log("ClinicTimingsComponent -> getProfile -> this.profile", this.profile);
        }).catch(error => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    onSave() {
        if (this.SlotForm.dirty && this.SlotForm.valid) {
            const data = {
                slotsArray: [
                    {
                        day: "monday",
                        morningSlot: {
                            from: this.SlotForm.controls['MorStart0'].value ? this.SlotForm.controls['MorStart0'].value : null,
                            to: this.SlotForm.controls['MorEnd0'].value ? this.SlotForm.controls['MorEnd0'].value : null
                        },
                        afternoonSlot: {
                            from: this.SlotForm.controls['AftStart0'].value ? this.SlotForm.controls['AftStart0'].value : null,
                            to: this.SlotForm.controls['AftEnd0'].value ? this.SlotForm.controls['AftEnd0'].value : null
                        },
                        eveningSlot: {
                            from: this.SlotForm.controls['EveStart0'].value ? this.SlotForm.controls['EveStart0'].value : null,
                            to: this.SlotForm.controls['EveEnd0'].value,
                        },
                        nightSlot: {
                            from: this.SlotForm.controls['NigStart0'].value ? this.SlotForm.controls['NigStart0'].value : null,
                            to: this.SlotForm.controls['NigEnd0'].value ? this.SlotForm.controls['NigEnd0'].value : null,
                        }
                    },
                    {
                        day: "tuesday",
                        morningSlot: {
                            from: this.SlotForm.controls['MorStart1'].value ? this.SlotForm.controls['MorStart1'].value : null,
                            to: this.SlotForm.controls['MorEnd1'].value ? this.SlotForm.controls['MorEnd1'].value : null
                        },
                        afternoonSlot: {
                            from: this.SlotForm.controls['AftStart1'].value ? this.SlotForm.controls['AftStart1'].value : null,
                            to: this.SlotForm.controls['AftEnd1'].value ? this.SlotForm.controls['AftEnd1'].value : null
                        },
                        eveningSlot: {
                            from: this.SlotForm.controls['EveStart1'].value ? this.SlotForm.controls['EveStart1'].value : null,
                            to: this.SlotForm.controls['EveEnd1'].value ? this.SlotForm.controls['EveEnd1'].value : null,
                        },
                        nightSlot: {
                            from: this.SlotForm.controls['NigStart1'].value ? this.SlotForm.controls['NigStart1'].value : null,
                            to: this.SlotForm.controls['NigEnd1'].value ? this.SlotForm.controls['NigEnd1'].value : null,
                        }
                    },
                    {
                        day: "wednesday",
                        morningSlot: {
                            from: this.SlotForm.controls['MorStart2'].value ? this.SlotForm.controls['MorStart2'].value : null,
                            to: this.SlotForm.controls['MorEnd2'].value ? this.SlotForm.controls['MorEnd2'].value : null
                        },
                        afternoonSlot: {
                            from: this.SlotForm.controls['AftStart2'].value ? this.SlotForm.controls['AftStart2'].value : null,
                            to: this.SlotForm.controls['AftEnd2'].value ? this.SlotForm.controls['AftEnd2'].value : null
                        },
                        eveningSlot: {
                            from: this.SlotForm.controls['EveStart2'].value ? this.SlotForm.controls['EveStart2'].value : null,
                            to: this.SlotForm.controls['EveEnd2'].value ? this.SlotForm.controls['EveEnd2'].value : null,
                        },
                        nightSlot: {
                            from: this.SlotForm.controls['NigStart2'].value ? this.SlotForm.controls['NigStart2'].value : null,
                            to: this.SlotForm.controls['NigEnd2'].value ? this.SlotForm.controls['NigEnd2'].value : null,
                        }
                    },
                    {
                        day: "thursday",
                        morningSlot: {
                            from: this.SlotForm.controls['MorStart3'].value ? this.SlotForm.controls['MorStart3'].value : null,
                            to: this.SlotForm.controls['MorEnd3'].value ? this.SlotForm.controls['MorEnd3'].value : null
                        },
                        afternoonSlot: {
                            from: this.SlotForm.controls['AftStart3'].value ? this.SlotForm.controls['AftStart3'].value : null,
                            to: this.SlotForm.controls['AftEnd3'].value ? this.SlotForm.controls['AftEnd3'].value : null
                        },
                        eveningSlot: {
                            from: this.SlotForm.controls['EveStart3'].value ? this.SlotForm.controls['EveStart3'].value : null,
                            to: this.SlotForm.controls['EveEnd3'].value ? this.SlotForm.controls['EveEnd3'].value : null,
                        },
                        nightSlot: {
                            from: this.SlotForm.controls['NigStart3'].value ? this.SlotForm.controls['NigStart3'].value : null,
                            to: this.SlotForm.controls['NigEnd3'].value ? this.SlotForm.controls['NigEnd3'].value : null,
                        }
                    },
                    {
                        day: "friday",
                        morningSlot: {
                            from: this.SlotForm.controls['MorStart4'].value ? this.SlotForm.controls['MorStart4'].value : null,
                            to: this.SlotForm.controls['MorEnd4'].value ? this.SlotForm.controls['MorStart4'].value : null
                        },
                        afternoonSlot: {
                            from: this.SlotForm.controls['AftStart4'].value ? this.SlotForm.controls['AftStart4'].value : null,
                            to: this.SlotForm.controls['AftEnd4'].value ? this.SlotForm.controls['AftEnd4'].value : null
                        },
                        eveningSlot: {
                            from: this.SlotForm.controls['EveStart4'].value ? this.SlotForm.controls['EveStart4'].value : null,
                            to: this.SlotForm.controls['EveEnd4'].value ? this.SlotForm.controls['EveEnd4'].value : null,
                        },
                        nightSlot: {
                            from: this.SlotForm.controls['NigStart4'].value ? this.SlotForm.controls['NigStart4'].value : null,
                            to: this.SlotForm.controls['NigEnd4'].value ? this.SlotForm.controls['NigEnd4'].value : null,
                        }
                    },
                    {
                        day: "saturday",
                        morningSlot: {
                            from: this.SlotForm.controls['MorStart5'].value ? this.SlotForm.controls['MorStart5'].value : null,
                            to: this.SlotForm.controls['MorEnd5'].value ? this.SlotForm.controls['MorEnd5'].value : null
                        },
                        afternoonSlot: {
                            from: this.SlotForm.controls['AftStart5'].value ? this.SlotForm.controls['AftStart5'].value : null,
                            to: this.SlotForm.controls['AftEnd5'].value ? this.SlotForm.controls['AftEnd5'].value : null
                        },
                        eveningSlot: {
                            from: this.SlotForm.controls['EveStart5'].value ? this.SlotForm.controls['EveStart5'].value : null,
                            to: this.SlotForm.controls['EveEnd5'].value ? this.SlotForm.controls['EveEnd5'].value : null
                        },
                        nightSlot: {
                            from: this.SlotForm.controls['NigStart5'].value ? this.SlotForm.controls['NigStart5'].value : null,
                            to: this.SlotForm.controls['NigEnd5'].value ? this.SlotForm.controls['NigEnd5'].value : null
                        }
                    },
                    {
                        day: "sunday",
                        morningSlot: {
                            from: this.SlotForm.controls['MorStart6'].value ? this.SlotForm.controls['MorStart6'].value : null,
                            to: this.SlotForm.controls['MorEnd6'].value ? this.SlotForm.controls['MorEnd6'].value : null
                        },
                        afternoonSlot: {
                            from: this.SlotForm.controls['AftStart6'].value ? this.SlotForm.controls['AftStart6'].value : null,
                            to: this.SlotForm.controls['AftEnd6'].value ? this.SlotForm.controls['AftEnd6'].value : null
                        },
                        eveningSlot: {
                            from: this.SlotForm.controls['EveStart6'].value ? this.SlotForm.controls['EveStart6'].value : null,
                            to: this.SlotForm.controls['EveEnd6'].value ? this.SlotForm.controls['EveEnd6'].value : null,
                        },
                        nightSlot: {
                            from: this.SlotForm.controls['NigStart6'].value ? this.SlotForm.controls['NigStart6'].value : null,
                            to: this.SlotForm.controls['NigEnd6'].value ? this.SlotForm.controls['NigEnd6'].value : null,
                        }
                    },
                ]
            };
            this.mainService.addTimeSlot(data).then(resData => {
                console.log("ClinicTimingsComponent -> onSave -> resData", resData);
                this.showToast('success', 'Profile', 'Profile updated successfully');
            }).catch(err => {
                console.log("ClinicTimingsComponent -> onSave -> err", err);
                this.showToast('warn', 'Profile', 'Something went wrong');
            });
        }
        else {
            this.SlotForm.removeControl('FormControlName');
        }
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.columns, event.previousIndex, event.currentIndex);
    }
}
ClinicTimingsComponent.ɵfac = function ClinicTimingsComponent_Factory(t) { return new (t || ClinicTimingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_5__["DoctorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"])); };
ClinicTimingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicTimingsComponent, selectors: [["app-clinic-timings"]], inputs: { stepper: "stepper" }, decls: 27, vars: 4, consts: [[3, "formGroup"], ["mat-table", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "dataSource", "cdkDropListDropped"], ["matColumnDef", "Day"], ["mat-header-cell", "", "cdkDrag", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width:8%", 4, "matCellDef"], ["matColumnDef", "MorningSlot", "align", "center"], ["mat-header-cell", "", "cdkDrag", "", "style", "text-align: center;background-color: #ececec;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width:22.5%;background-color: #ececec;", 4, "matCellDef"], ["matColumnDef", "AfternoonSlots"], ["mat-header-cell", "", "style", "text-align: center;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width:22.5%", 4, "matCellDef"], ["matColumnDef", "EveningSlots"], ["mat-header-cell", "", "style", "text-align: center;background-color: #ececec;", 4, "matHeaderCellDef"], ["matColumnDef", "NightSlots"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "container-fluid"], [1, "row"], ["mat-raised-button", "", "matStepperPrevious", ""], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "themeColorBtn", 2, "position", "absolute", "right", "0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], ["mat-header-cell", "", "cdkDrag", ""], ["mat-cell", "", 2, "width", "8%"], ["mat-header-cell", "", "cdkDrag", "", 2, "text-align", "center", "background-color", "#ececec"], ["mat-cell", "", 2, "width", "22.5%", "background-color", "#ececec"], [1, "col-12"], [1, "col-6"], ["appearance", "outline", 2, "display", "block"], ["required", "", 3, "formControlName"], ["value", "06:00"], ["value", "06:30"], ["value", "07:00"], ["value", "07:30"], ["value", "08:00"], ["value", "08:30"], ["value", "09:00"], ["value", "09:30"], ["value", "10:00"], ["value", "10:30"], ["value", "11:00"], ["value", "11:30"], ["value", "11:59"], ["mat-header-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "width", "22.5%"], ["value", "12:00"], ["value", "12:30"], ["value", "13:00"], ["value", "13:30"], ["value", "14:00"], ["value", "14:30"], ["value", "15:00"], ["value", "15:30"], ["value", "16:00"], ["value", "16:30"], ["value", "17:00"], ["value", "17:30"], ["value", "17:59"], ["mat-header-cell", "", 2, "text-align", "center", "background-color", "#ececec"], ["value", "18:00"], ["value", "18:30"], ["value", "19:00"], ["value", "19:30"], ["value", "20:00"], ["value", "20:30"], ["value", "21:00"], ["value", "21:30"], ["value", "22:00"], ["value", "22:30"], ["value", "23:00"], ["value", "23:30"], ["value", "23:59"], ["value", "00:00 "], ["value", "00:30"], ["value", "01:00"], ["value", "01:30"], ["value", "02:00"], ["value", "02:30"], ["value", "03:00"], ["value", "03:30"], ["value", "04:00"], ["value", "04:30"], ["value", "05:00"], ["value", "05:30"], ["value", "05:59"], ["value", "00:00"], ["mat-header-row", ""], ["mat-row", ""]], template: function ClinicTimingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ClinicTimingsComponent_Template_table_cdkDropListDropped_1_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ClinicTimingsComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClinicTimingsComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClinicTimingsComponent_th_6_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClinicTimingsComponent_td_7_Template, 69, 2, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClinicTimingsComponent_th_9_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClinicTimingsComponent_td_10_Template, 69, 2, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClinicTimingsComponent_th_12_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicTimingsComponent_td_13_Template, 69, 2, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ClinicTimingsComponent_th_15_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ClinicTimingsComponent_td_16_Template, 69, 2, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClinicTimingsComponent_tr_17_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClinicTimingsComponent_tr_18_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicTimingsComponent_Template_button_click_24_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Save and continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SlotForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperPrevious"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  background-color: white;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 2px;\n  margin-right: 2px;\n  cursor: pointer;\n}\n\n.pt[_ngcontent-%COMP%] {\n  margin: 5px 0 0px !important;\n}\n\n.acti[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n}\n\n.acti[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.addmore[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #14bef0;\n  cursor: pointer;\n}\n\n.unselect[_ngcontent-%COMP%] {\n  background: lightgray;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background: #f44336 !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jbGluaWMtdGltaW5ncy9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxccHJvZmlsZVxcY2xpbmljLXRpbWluZ3NcXGNsaW5pYy10aW1pbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2NsaW5pYy10aW1pbmdzL2NsaW5pYy10aW1pbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURDQSxrQkFBQTs7QUFFQTs7RUFFSSxjQUFBO0FDQ0o7O0FEQ0E7O0VBRUkseUJBQUE7QUNFSjs7QURDQTs7OztFQU1JLGtCQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxtQkFBQTtFQ0FOOztFREVFOzs7O0lBSUksY0FBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDQ047QUFDRjs7QURDQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSw0QkFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7QUNJSjs7QURISTtFQUNJLHVCQUFBO0FDS1I7O0FERkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLSjs7QURGQTtFQUNJLHFCQUFBO0FDS0o7O0FERkE7RUFDSSw4QkFBQTtBQ0tKOztBREZBO0VBQ0ksV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jbGluaWMtdGltaW5ncy9jbGluaWMtdGltaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOGY2O1xyXG59XHJcblxyXG4udGV4dGNvbCB7XHJcbiAgICBjb2xvcjogIzE0YWE5YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0c2V0ciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4vKiB5ZWxsb3cgc3lsaW5nICovXHJcblxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlcixcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxyXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcclxuICAgIC8vICAgY29sb3I6ICNmMGZmZjM7XHJcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5wYWRkaW5nb254cyB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuICAgIC5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbiAgICAubWF0LWZhYi5tYXQtc3VjY2VzcyxcclxuICAgIC5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAjZjBmZmYzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5kb3Qge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHQge1xyXG4gICAgbWFyZ2luOiA1cHggMCAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYWN0aSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xyXG4gICAgPiBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uYWRkbW9yZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzE0YmVmMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVuc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XG59XG5cbi50ZXh0Y29sIHtcbiAgY29sb3I6ICMxNGFhOWI7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYnV0c2V0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIHllbGxvdyBzeWxpbmcgKi9cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3Zlcixcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhZGRpbmdvbnhzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICNmMGZmZjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5kb3Qge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wdCB7XG4gIG1hcmdpbjogNXB4IDAgMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTAwMDtcbn1cbi5hY3RpID4gcCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYWRkbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMxNGJlZjA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVuc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicTimingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinic-timings',
                templateUrl: './clinic-timings.component.html',
                styleUrls: ['./clinic-timings.component.scss']
            }]
    }], function () { return [{ type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_5__["DoctorProfileService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const ELEMENT_DATA = [
    { Day: 'MON', MorningSlot: 'Hydrogen', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'TUE', MorningSlot: 'Helium', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'WED', MorningSlot: 'Lithium', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'THU', MorningSlot: 'Beryllium', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'FRI', MorningSlot: 'Boron', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'SAT', MorningSlot: 'Carbon', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'SUN', MorningSlot: 'Nitrogen', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
];


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/connect-clinic/connect-clinic.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/connect-clinic/connect-clinic.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ConnectClinicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectClinicComponent", function() { return ConnectClinicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");











class ConnectClinicComponent {
    constructor(mainService, messageService, router, uploadService) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.router = router;
        this.uploadService = uploadService;
        this.items = [];
        this.hide = false;
        this.profileform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            typeOfEstablishment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.items.length = 100;
        this.getProfile();
    }
    ngOnInit() { }
    getProfile() {
        this.mainService.getProfile().then(resData => {
            this.profileform.patchValue(resData.data);
        }).catch(error => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    onSave() {
        this.mainService.updateUserprofile(this.profileform.value).then(resData => {
            this.showToast('success', 'Profile', 'Profile updated successfully');
            this.stepper.next();
            this.router.navigate(['/Doctor/Profile']);
        }).catch(error => {
            console.log("EditProfileComponent -> onSave -> error", error);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
}
ConnectClinicComponent.ɵfac = function ConnectClinicComponent_Factory(t) { return new (t || ConnectClinicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"])); };
ConnectClinicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectClinicComponent, selectors: [["app-connect-clinic"]], inputs: { stepper: "stepper" }, decls: 28, vars: 1, consts: [[1, "bg-white", "p-sm-3"], [1, "row"], [1, "col-md-5", "col-lg-3", "offset-md-2"], [2, "font-size", "15px"], [1, "form-group", 3, "formGroup"], ["aria-label", "Select an option", "formControlName", "typeOfEstablishment"], [1, "row", "py-2", "pl-2"], ["value", "OwnEstablishment"], ["value", "VisitEstablishment"], [1, "mt-5", "mb-5"], ["mat-raised-button", "", "matStepperPrevious", ""], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", "routerLinkActive", "router-link-active", 1, "themeColorBtn", 2, "margin-left", "10px !important", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-md-3", "col-lg-5", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"]], template: function ConnectClinicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please select any one of the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I own a establishment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I visit a establishment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConnectClinicComponent_Template_button_click_18_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Save and Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Patients often search for doctors by locality. Therefore, adding all your practice establishments ensures that your profile is visible to patients in all the relevant searches. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileform);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperPrevious"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jb25uZWN0LWNsaW5pYy9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxccHJvZmlsZVxcY29ubmVjdC1jbGluaWNcXGNvbm5lY3QtY2xpbmljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2Nvbm5lY3QtY2xpbmljL2Nvbm5lY3QtY2xpbmljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURDQSxtQkFBQTs7QUFFQTs7RUFFSSxjQUFBO0FDQ0o7O0FEQ0E7O0VBRUUseUJBQUE7QUNFRjs7QURDQTs7OztFQU1FLGtCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0k7SUFDSSxtQkFBQTtFQ0FOOztFREVFOzs7O0lBSUYsY0FBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDQ0E7QUFDRjs7QURFQTtFQUNJLGdCQUFBO0FDQUo7O0FERUU7RUFDRSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jb25uZWN0LWNsaW5pYy9jb25uZWN0LWNsaW5pYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOGY2O1xyXG59XHJcblxyXG4udGV4dGNvbCB7XHJcbiAgICBjb2xvcjogIzE0YWE5YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDEuNTByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHNldHIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLyogU3VjY2VzcyBzeWxpbmcgKi9cclxuXHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG59XHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxyXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcclxuICAvLyBjb2xvcjogI2YwZmZmMztcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICAucGFkZGluZ29ueHN7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDozMHB4IDtcclxuICAgIH0gIFxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZhYi5tYXQtc3VjY2VzcyxcclxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmMGZmZjM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcblxyXG59IFxyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuICAubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuIiwiLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcbn1cblxuLnRleHRjb2wge1xuICBjb2xvcjogIzE0YWE5Yjtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idXRzZXRyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLyogU3VjY2VzcyBzeWxpbmcgKi9cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3Zlcixcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhZGRpbmdvbnhzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICNmMGZmZjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectClinicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-connect-clinic',
                templateUrl: './connect-clinic.component.html',
                styleUrls: ['./connect-clinic.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/consultant-details/consultant-details.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/consultant-details/consultant-details.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ConsultantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantDetailsComponent", function() { return ConsultantDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






















function ConsultantDetailsComponent_div_6_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r1012 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r1012.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r1012 == null ? null : country_r1012.name);
} }
function ConsultantDetailsComponent_div_6_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r1013 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r1013.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r1013.name);
} }
function ConsultantDetailsComponent_div_6_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r1014 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r1014.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r1014 == null ? null : city_r1014.name);
} }
function ConsultantDetailsComponent_div_6_ng_container_39_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disCol_r1015 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](disCol_r1015);
} }
function ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1020 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const disCol_r1015 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1020[disCol_r1015]);
} }
function ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1021 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1021 + 1, " ");
} }
function ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1030 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1030); const element_r1020 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1028 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r1028.openEdit(element_r1020.Action); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_3_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1030); const element_r1020 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r1031 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r1031.onDelete(element_r1020.Action); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_1_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_2_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_div_3_Template, 5, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disCol_r1015 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", disCol_r1015 != "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", disCol_r1015 == "Sr_No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", disCol_r1015 == "Action");
} }
function ConsultantDetailsComponent_div_6_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConsultantDetailsComponent_div_6_ng_container_39_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsultantDetailsComponent_div_6_ng_container_39_mat_cell_2_Template, 4, 3, "mat-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const disCol_r1015 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", disCol_r1015);
} }
function ConsultantDetailsComponent_div_6_mat_header_row_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function ConsultantDetailsComponent_div_6_mat_row_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
function ConsultantDetailsComponent_div_6_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultantDetailsComponent_div_6_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1035 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r1035.Day, " ");
} }
function ConsultantDetailsComponent_div_6_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Morning Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultantDetailsComponent_div_6_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "06:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "06:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "07:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "07:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "08:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "08:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "09:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "11:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "11:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "11:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "06:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "06:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "07:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "07:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "08:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "08:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "09:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "09:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "10:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "10:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "11:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "11:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "11:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1037 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "MorStart", i_r1037, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "MorEnd", i_r1037, "");
} }
function ConsultantDetailsComponent_div_6_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Afternoon Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultantDetailsComponent_div_6_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "12:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "12:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "13:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "13:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "14:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "14:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "15:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "16:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "16:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "17:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "17:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "17:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "12:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "13:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "13:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "14:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "14:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "15:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "15:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "16:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "16:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "17:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "17:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "17:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1039 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "AftStart", i_r1039, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "AftEnd", i_r1039, "");
} }
function ConsultantDetailsComponent_div_6_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultantDetailsComponent_div_6_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "18:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "19:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "20:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "20:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "21:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "21:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "22:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "22:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "23:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "23:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "23:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "18:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "18:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "19:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "19:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "20:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "20:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "21:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "21:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "22:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "22:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "23:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "23:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "23:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1041 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "EveStart", i_r1041, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "EveEnd", i_r1041, "");
} }
function ConsultantDetailsComponent_div_6_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Night Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsultantDetailsComponent_div_6_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sessions Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "00:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "01:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "02:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "02:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "03:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "03:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "04:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "04:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "05:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "05:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "05:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sessions End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " -- None -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "00:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "01:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "01:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "02:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "02:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "03:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "03:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "04:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "04:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "05:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "05:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "05:59");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1043 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "NigStart", i_r1043, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("formControlName", "NigEnd", i_r1043, "");
} }
function ConsultantDetailsComponent_div_6_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 124);
} }
function ConsultantDetailsComponent_div_6_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 125);
} }
const _c0 = function () { return [5, 10, 25]; };
function ConsultantDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r1046 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clinic Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Landmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConsultantDetailsComponent_div_6_Template_mat_select_selectionChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1046); const ctx_r1045 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1045.CountryId($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ConsultantDetailsComponent_div_6_mat_option_22_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConsultantDetailsComponent_div_6_Template_mat_select_selectionChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1046); const ctx_r1047 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1047.State($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ConsultantDetailsComponent_div_6_mat_option_29_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConsultantDetailsComponent_div_6_Template_mat_select_selectionChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1046); const ctx_r1048 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1048.City($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ConsultantDetailsComponent_div_6_mat_option_35_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ConsultantDetailsComponent_div_6_ng_container_39_Template, 3, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ConsultantDetailsComponent_div_6_mat_header_row_40_Template, 1, 0, "mat-header-row", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ConsultantDetailsComponent_div_6_mat_row_41_Template, 1, 0, "mat-row", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-paginator", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Add Clinic Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ConsultantDetailsComponent_div_6_Template_table_cdkDropListDropped_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1046); const ctx_r1049 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1049.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ConsultantDetailsComponent_div_6_th_52_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ConsultantDetailsComponent_div_6_td_53_Template, 2, 1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ConsultantDetailsComponent_div_6_th_55_Template, 2, 0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ConsultantDetailsComponent_div_6_td_56_Template, 69, 2, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ConsultantDetailsComponent_div_6_th_58_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ConsultantDetailsComponent_div_6_td_59_Template, 69, 2, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ConsultantDetailsComponent_div_6_th_61_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ConsultantDetailsComponent_div_6_td_62_Template, 69, 2, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ConsultantDetailsComponent_div_6_th_64_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ConsultantDetailsComponent_div_6_td_65_Template, 69, 2, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ConsultantDetailsComponent_div_6_tr_66_Template, 1, 0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ConsultantDetailsComponent_div_6_tr_67_Template, 1, 0, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r992 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r992.countryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r992.stateList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r992.cityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r992.dataSource1 == null ? null : ctx_r992.dataSource1.filteredData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r992.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r992.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r992.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r992.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r992.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r992.columns);
} }
function ConsultantDetailsComponent_mat_form_field_7_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clinic_r1051 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", clinic_r1051 == null ? null : clinic_r1051._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](clinic_r1051.name);
} }
function ConsultantDetailsComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clinic Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConsultantDetailsComponent_mat_form_field_7_mat_option_6_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r993 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r993.ClinicName);
} }
class ConsultantDetailsComponent {
    constructor(mainService, messageService, router, fb, dialog, location) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.router = router;
        this.fb = fb;
        this.dialog = dialog;
        this.location = location;
        this.displayedColumns = [];
        this.columns = ['Day', 'MorningSlot', 'AfternoonSlots', 'EveningSlots', 'NightSlots'];
        this.dataSource = ELEMENT_DATA;
        this.dMO = false;
        this.dTU = false;
        this.dWE = false;
        this.dTH = false;
        this.dFR = false;
        this.dSA = false;
        this.dSU = false;
        this.timeSloats = [];
        this.TimeSloat2 = [];
        this.items = [];
        this.hide = true;
        this.clinicList = [];
        this.hide1 = true;
        this.DataClinic = false;
        this.getProfile();
        this.mainService.getAllClinic().then(AllClinicName => {
            console.log("ConsultantDetailsComponent -> AllClinicName", AllClinicName);
            const dfgf = AllClinicName.data;
            this.data = AllClinicName.data;
            console.log("ConsultantDetailsComponent -> dfgf", dfgf);
            // for( let i=0 ; i < dfgf.length ; i++ ){
            //   this.data12.push(dfgf[i]);
            //   // this.data.push(dfgf[i]);
            // }
            // console.log("ConsultantDetailsComponent ->  this.data12",  this.data12);
            //  this.data12 = AllClinicName
        }).catch(error => {
            console.log("ConsultantDetailsComponent -> error", error);
        });
        this.getClinicName();
        this.getCountry();
        this.getLocation();
        this.displayedColumns = [
            "Sr_No",
            "Clinic_Name",
            "Address",
            "Action",
        ];
    }
    ngOnInit() {
        // this.getTime();
        this.memberForm = this.fb.group({
            clinicName: [''],
            ClinicName1: [''],
            address: [''],
            landmark: [''],
            country: [''],
            state: [''],
            city: [''],
            fees: [''],
            establishmentHour: [''],
            hours: [""],
            MorStart0: [""],
            MorStart1: [""],
            MorStart2: [""],
            MorStart3: [""],
            MorStart4: [""],
            MorStart5: [""],
            MorStart6: [""],
            MorEnd0: [""],
            MorEnd1: [""],
            MorEnd2: [""],
            MorEnd3: [""],
            MorEnd4: [""],
            MorEnd5: [""],
            MorEnd6: [""],
            AftStart0: [""],
            AftStart1: [""],
            AftStart2: [""],
            AftStart3: [""],
            AftStart4: [""],
            AftStart5: [""],
            AftStart6: [""],
            AftEnd0: [""],
            AftEnd1: [""],
            AftEnd2: [""],
            AftEnd3: [""],
            AftEnd4: [""],
            AftEnd5: [""],
            AftEnd6: [""],
            EveStart0: [""],
            EveStart1: [""],
            EveStart2: [""],
            EveStart3: [""],
            EveStart4: [""],
            EveStart5: [""],
            EveStart6: [""],
            EveEnd0: [""],
            EveEnd1: [""],
            EveEnd2: [""],
            EveEnd3: [""],
            EveEnd4: [""],
            EveEnd5: [""],
            EveEnd6: [""],
            NigStart0: [""],
            NigStart1: [""],
            NigStart2: [""],
            NigStart3: [""],
            NigStart4: [""],
            NigStart5: [""],
            NigStart6: [""],
            NigEnd0: [""],
            NigEnd1: [""],
            NigEnd2: [""],
            NigEnd3: [""],
            NigEnd4: [""],
            NigEnd5: [""],
            NigEnd6: [""],
        });
        this.memberForm.controls.ClinicName1.valueChanges.subscribe((resData) => {
            this.clinicId = resData;
            console.log("file: consultant-details.component.ts ~ line 85 ~ ConsultantDetailsComponent ~ ngOnInit ~ this.clinicId", this.clinicId);
            this.visiteClinic(resData);
        });
        this.memberForm.controls.clinicName.valueChanges.subscribe((resData) => {
            this.VisiteclinicId = resData;
            console.log("file: consultant-details.component.ts ~ line 85 ~ ConsultantDetailsComponent ~ ngOnInit ~ this.VisiteclinicId", this.VisiteclinicId);
            this.visiteClinic(this.VisiteclinicId);
        });
    }
    getLocation() {
        this.location.getPosition().subscribe(res => {
            this.lat = res.coords.latitude;
            this.lang = res.coords.longitude;
        });
    }
    getCountry() {
        this.mainService
            .getCountry()
            .then((resData) => {
            this.countryList = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    CountryId(event) {
        this.countryId = event.value;
        this.mainService
            .getState(this.countryId)
            .then((resData) => {
            this.stateList = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    State(event) {
        this.stateId = event.value;
        this.mainService
            .getCity(this.stateId)
            .then((resData) => {
            this.cityList = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    City(event) {
        this.cityId = event.value;
    }
    getClinicName() {
        this.mainService.getAllClinic().then(resData => {
            console.log("file: consultant-details.component.ts ~ line 189 ~ ConsultantDetailsComponent ~ this.mainService.getAllClinic ~ resData", resData);
            this.ClinicName = resData.data;
            console.log("file: consultant-details.component.ts ~ line 192 ~ ConsultantDetailsComponent ~ this.mainService.getAllClinic ~ this.ClinicName", this.ClinicName);
        });
    }
    getProfile() {
        this.mainService.getProfile().then(resData => {
            this.profile = resData.data;
            this.getDocClinic(this.profile._id);
            this.memberForm.patchValue(resData.data);
            if (resData.data.typeOfEstablishment == "OwnEstablishment") {
                this.hide = false;
            }
            else {
                this.hide = true;
            }
        }).catch(error => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    getDocClinic(id) {
        this.clinicList = [];
        this.DataClinic = true;
        if (id != '') {
            const data = {
                doctorId: id
            };
            this.mainService.getDOCClinic(data).then(resDataDoc => {
                console.log("ConsultantDetailsComponent -> getDocClinic -> resDataDoc", resDataDoc);
                for (let i = 0; i < resDataDoc.data.length; i++) {
                    this.DocClinic = resDataDoc.data[i];
                    console.log("ConsultantDetailsComponent -> getDocClinic -> this.DocClinic", this.DocClinic);
                    const element = resDataDoc.data[i];
                    const arr = {
                        Sr_No: "",
                        Clinic_Name: element.clinicId.name,
                        Address: element.locationId.location.address,
                        Action: element.clinicId._id,
                    };
                    this.clinicList.push(arr);
                }
                this.dataSource1 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.clinicList ? this.clinicList : null);
                console.log("ConsultantDetailsComponent -> getDocClinic -> this.dataSource1", this.dataSource1);
                this.dataSource1.paginator = this.paginator;
                console.log("ConsultantDetailsComponent -> getDocClinic -> this.dataSource1.paginator", this.dataSource1.paginator);
            }).catch(err => {
                console.log("ConsultantDetailsComponent -> getDocClinic -> err", err);
            });
        }
    }
    openEdit(id) {
        console.log("ConsultantDetailsComponent -> openEdit -> id", id);
        const data = {
            clinicId: id
        };
        this.mainService.getDOCClinic(data).then(resData => {
            console.log("ConsultantDetailsComponent -> openEdit -> resData", resData);
            this.ClinicDetails = resData.data[0];
            this.IdClinic = this.ClinicDetails.clinicId._id;
            this.IdLocation = this.ClinicDetails.locationId._id;
            this.IdTime = this.ClinicDetails._id;
            console.log("ConsultantDetailsComponent -> openEdit -> this.IdClinic  +  this.IdLocation + this.IdTime", this.IdClinic, this.IdLocation, this.IdTime);
            for (let i = 0; i < resData.data.length; i++) {
                this.memberForm.patchValue({
                    clinicName: resData.data[i].clinicId.name,
                    address: resData.data[i].locationId.location.address,
                    landmark: resData.data[i].locationId.location.landmark,
                    country: resData.data[i].locationId.location.country,
                    state: resData.data[i].locationId.location.state,
                    city: resData.data[i].locationId.location.city,
                });
                for (let k = 0; k < resData.data[0].timing.length; k++) {
                    if (k == 0) {
                        this.memberForm.patchValue({
                            MorStart0: resData.data[i].timing[k].morningSlot.startTime,
                            MorEnd0: resData.data[i].timing[k].morningSlot.endTime,
                            AftStart0: resData.data[i].timing[k].afternoonSlot.startTime,
                            AftEnd0: resData.data[i].timing[k].afternoonSlot.endTime,
                            EveStart0: resData.data[i].timing[k].eveningSlot.startTime,
                            EveEnd0: resData.data[i].timing[k].eveningSlot.endTime,
                            NigStart0: resData.data[i].timing[k].nightSlot.startTime,
                            NigEnd0: resData.data[i].timing[k].nightSlot.endTime,
                        });
                    }
                    else if (k == 1) {
                        this.memberForm.patchValue({
                            MorStart1: resData.data[i].timing[k].morningSlot.startTime,
                            MorEnd1: resData.data[i].timing[k].morningSlot.endTime,
                            AftStart1: resData.data[i].timing[k].afternoonSlot.startTime,
                            AftEnd1: resData.data[i].timing[k].afternoonSlot.endTime,
                            EveStart1: resData.data[i].timing[k].eveningSlot.startTime,
                            EveEnd1: resData.data[i].timing[k].eveningSlot.endTime,
                            NigStart1: resData.data[i].timing[k].nightSlot.startTime,
                            NigEnd1: resData.data[i].timing[k].nightSlot.endTime,
                        });
                    }
                    else if (k == 2) {
                        this.memberForm.patchValue({
                            MorStart2: resData.data[i].timing[k].morningSlot.startTime,
                            MorEnd2: resData.data[i].timing[k].morningSlot.endTime,
                            AftStart2: resData.data[i].timing[k].afternoonSlot.startTime,
                            AftEnd2: resData.data[i].timing[k].afternoonSlot.endTime,
                            EveStart2: resData.data[i].timing[k].eveningSlot.startTime,
                            EveEnd2: resData.data[i].timing[k].eveningSlot.endTime,
                            NigStart2: resData.data[i].timing[k].nightSlot.startTime,
                            NigEnd2: resData.data[i].timing[k].nightSlot.endTime,
                        });
                    }
                    else if (k == 3) {
                        this.memberForm.patchValue({
                            MorStart3: resData.data[i].timing[k].morningSlot.startTime,
                            MorEnd3: resData.data[i].timing[k].morningSlot.endTime,
                            AftStart3: resData.data[i].timing[k].afternoonSlot.startTime,
                            AftEnd3: resData.data[i].timing[k].afternoonSlot.endTime,
                            EveStart3: resData.data[i].timing[k].eveningSlot.startTime,
                            EveEnd3: resData.data[i].timing[k].eveningSlot.endTime,
                            NigStart3: resData.data[i].timing[k].nightSlot.startTime,
                            NigEnd3: resData.data[i].timing[k].nightSlot.endTime,
                        });
                    }
                    else if (k == 4) {
                        this.memberForm.patchValue({
                            MorStart4: resData.data[i].timing[k].morningSlot.startTime,
                            MorEnd4: resData.data[i].timing[k].morningSlot.endTime,
                            AftStart4: resData.data[i].timing[k].afternoonSlot.startTime,
                            AftEnd4: resData.data[i].timing[k].afternoonSlot.endTime,
                            EveStart4: resData.data[i].timing[k].eveningSlot.startTime,
                            EveEnd4: resData.data[i].timing[k].eveningSlot.endTime,
                            NigStart4: resData.data[i].timing[k].nightSlot.startTime,
                            NigEnd4: resData.data[i].timing[k].nightSlot.endTime,
                        });
                    }
                    else if (k == 5) {
                        this.memberForm.patchValue({
                            MorStart5: resData.data[i].timing[k].morningSlot.startTime,
                            MorEnd5: resData.data[i].timing[k].morningSlot.endTime,
                            AftStart5: resData.data[i].timing[k].afternoonSlot.startTime,
                            AftEnd5: resData.data[i].timing[k].afternoonSlot.endTime,
                            EveStart5: resData.data[i].timing[k].eveningSlot.startTime,
                            EveEnd5: resData.data[i].timing[k].eveningSlot.endTime,
                            NigStart5: resData.data[i].timing[k].nightSlot.startTime,
                            NigEnd5: resData.data[i].timing[k].nightSlot.endTime,
                        });
                    }
                    else if (k == 6) {
                        this.memberForm.patchValue({
                            MorStart6: resData.data[i].timing[k].morningSlot.startTime,
                            MorEnd6: resData.data[i].timing[k].morningSlot.endTime,
                            AftStart6: resData.data[i].timing[k].afternoonSlot.startTime,
                            AftEnd6: resData.data[i].timing[k].afternoonSlot.endTime,
                            EveStart6: resData.data[i].timing[k].eveningSlot.startTime,
                            EveEnd6: resData.data[i].timing[k].eveningSlot.endTime,
                            NigStart6: resData.data[i].timing[k].nightSlot.startTime,
                            NigEnd6: resData.data[i].timing[k].nightSlot.endTime,
                        });
                    }
                    else {
                        this.hide1 = true;
                    }
                }
            }
            console.log("ConsultantDetailsComponent -> openEdit ->  this.memberForm", this.memberForm);
        }).catch(err => {
            console.log("ConsultantDetailsComponent -> openEdit -> err", err);
        });
    }
    onDelete(id) {
        console.log("ConsultantDetailsComponent -> onDelete -> id", id);
        const data = {
            clinicId: id
        };
        this.mainService.getDOCClinic(data).then(resDataDel => {
            console.log("ConsultantDetailsComponent -> onDelete -> resDataDel", resDataDel);
            this.DoctorId = resDataDel.data[0].doctorId;
            this.IdClinic = resDataDel.data[0].clinicId._id;
            this.IdLocation = resDataDel.data[0].locationId._id;
            this.IdTime = resDataDel.data[0]._id;
            console.log("ConsultantDetailsComponent -> openEdit -> this.IdClinic  +  this.IdLocation + this.IdTime", this.IdClinic, this.IdLocation, this.IdTime);
            this.mainService.deleteClinicById(this.IdClinic).then(DeleteCres => {
                console.log("ConsultantDetailsComponent -> onDelete -> DeleteCres", DeleteCres);
            }).catch(err => {
                console.log("ConsultantDetailsComponent -> onDelete -> err", err);
            });
            this.mainService.deleteLocationById(this.IdLocation).then(deleteLRes => {
                console.log("ConsultantDetailsComponent -> onDelete -> deleteLRes", deleteLRes);
            }).catch(error => {
                console.log("ConsultantDetailsComponent -> onDelete -> error", error);
            });
            this.mainService.deleteTimeById(this.IdTime).then(deleteTRes => {
                console.log("ConsultantDetailsComponent -> onDelete -> deleteTRes", deleteTRes);
            }).catch(err => {
                console.log("ConsultantDetailsComponent -> onDelete -> err", err);
            });
            this.ngOnInit();
            this.getDocClinic(this.DoctorId);
        }).catch(error => {
            console.log("ConsultantDetailsComponent -> onDelete -> error", error);
        });
    }
    SaveSlots() {
        const data123 = {
            doctorId: this.profile._id,
            clinicId: this.ClinicId,
            locationId: this.locationId,
            timing: [
                {
                    day: "monday",
                    morningSlot: {
                        startTime: this.memberForm.controls['MorStart0'].value,
                        endTime: this.memberForm.controls['MorEnd0'].value
                    },
                    afternoonSlot: {
                        startTime: this.memberForm.controls['AftStart0'].value,
                        endTime: this.memberForm.controls['AftEnd0'].value
                    },
                    eveningSlot: {
                        startTime: this.memberForm.controls['EveStart0'].value,
                        endTime: this.memberForm.controls['EveEnd0'].value,
                    },
                    nightSlot: {
                        startTime: this.memberForm.controls['NigStart0'].value,
                        endTime: this.memberForm.controls['NigEnd0'].value,
                    }
                },
                {
                    day: "tuesday",
                    morningSlot: {
                        startTime: this.memberForm.controls['MorStart1'].value,
                        endTime: this.memberForm.controls['MorEnd1'].value
                    },
                    afternoonSlot: {
                        startTime: this.memberForm.controls['AftStart1'].value,
                        endTime: this.memberForm.controls['AftEnd1'].value
                    },
                    eveningSlot: {
                        startTime: this.memberForm.controls['EveStart1'].value,
                        endTime: this.memberForm.controls['EveEnd1'].value,
                    },
                    nightSlot: {
                        startTime: this.memberForm.controls['NigStart1'].value,
                        endTime: this.memberForm.controls['NigEnd1'].value,
                    }
                },
                {
                    day: "wednesday",
                    morningSlot: {
                        startTime: this.memberForm.controls['MorStart2'].value,
                        endTime: this.memberForm.controls['MorEnd2'].value
                    },
                    afternoonSlot: {
                        startTime: this.memberForm.controls['AftStart2'].value,
                        endTime: this.memberForm.controls['AftEnd2'].value
                    },
                    eveningSlot: {
                        startTime: this.memberForm.controls['EveStart2'].value,
                        endTime: this.memberForm.controls['EveEnd2'].value,
                    },
                    nightSlot: {
                        startTime: this.memberForm.controls['NigStart2'].value,
                        endTime: this.memberForm.controls['NigEnd2'].value,
                    }
                },
                {
                    day: "thursday",
                    morningSlot: {
                        startTime: this.memberForm.controls['MorStart3'].value,
                        endTime: this.memberForm.controls['MorEnd3'].value
                    },
                    afternoonSlot: {
                        startTime: this.memberForm.controls['AftStart3'].value,
                        endTime: this.memberForm.controls['AftEnd3'].value
                    },
                    eveningSlot: {
                        startTime: this.memberForm.controls['EveStart3'].value,
                        endTime: this.memberForm.controls['EveEnd3'].value,
                    },
                    nightSlot: {
                        startTime: this.memberForm.controls['NigStart3'].value,
                        endTime: this.memberForm.controls['NigEnd3'].value,
                    }
                },
                {
                    day: "friday",
                    morningSlot: {
                        startTime: this.memberForm.controls['MorStart4'].value,
                        endTime: this.memberForm.controls['MorEnd4'].value
                    },
                    afternoonSlot: {
                        startTime: this.memberForm.controls['AftStart4'].value,
                        endTime: this.memberForm.controls['AftEnd4'].value
                    },
                    eveningSlot: {
                        startTime: this.memberForm.controls['EveStart4'].value,
                        endTime: this.memberForm.controls['EveEnd4'].value,
                    },
                    nightSlot: {
                        startTime: this.memberForm.controls['NigStart4'].value,
                        endTime: this.memberForm.controls['NigEnd4'].value,
                    }
                },
                {
                    day: "saturday",
                    morningSlot: {
                        startTime: this.memberForm.controls['MorStart5'].value,
                        endTime: this.memberForm.controls['MorEnd5'].value
                    },
                    afternoonSlot: {
                        startTime: this.memberForm.controls['AftStart5'].value,
                        endTime: this.memberForm.controls['AftEnd5'].value
                    },
                    eveningSlot: {
                        startTime: this.memberForm.controls['EveStart5'].value,
                        endTime: this.memberForm.controls['EveEnd5'].value,
                    },
                    nightSlot: {
                        startTime: this.memberForm.controls['NigStart5'].value,
                        endTime: this.memberForm.controls['NigEnd5'].value,
                    }
                },
                {
                    day: "sunday",
                    morningSlot: {
                        startTime: this.memberForm.controls['MorStart6'].value,
                        endTime: this.memberForm.controls['MorEnd6'].value
                    },
                    afternoonSlot: {
                        startTime: this.memberForm.controls['AftStart6'].value,
                        endTime: this.memberForm.controls['AftEnd6'].value
                    },
                    eveningSlot: {
                        startTime: this.memberForm.controls['EveStart6'].value,
                        endTime: this.memberForm.controls['EveEnd6'].value,
                    },
                    nightSlot: {
                        startTime: this.memberForm.controls['NigStart6'].value,
                        endTime: this.memberForm.controls['NigEnd6'].value,
                    }
                },
            ]
        };
        console.log("ConsultantDetailsComponent -> SaveSlots -> data123", data123);
        this.mainService.addTime(data123).then(slotData => {
            console.log("ConsultantDetailsComponent -> SaveSlots -> slotData", slotData);
            this.timeId = slotData.data._id;
        }).catch(error => {
            console.log("ConsultantDetailsComponent -> SaveSlots -> error", error);
        });
    }
    onSave(stepper) {
        if (this.profile.typeOfEstablishment === "OwnEstablishment") {
            const data = {
                name: this.memberForm.controls.clinicName.value
            };
            console.log("ConsultantDetailsComponent -> onSave -> data", data);
            this.mainService.addclinic(data).then(ClinicData => {
                console.log("file: consultant-details.component.ts ~ line 156 ~ ConsultantDetailsComponent ~ this.mainService.addclinic ~ ClinicData", ClinicData);
                this.ClinicId = ClinicData.data._id;
                const data1 = {
                    clinicId: ClinicData.data._id,
                    location: {
                        address: this.memberForm.controls.address.value,
                        landmark: this.memberForm.controls.landmark.value,
                        country: this.countryId,
                        state: this.stateId,
                        city: this.cityId,
                        lat: this.lat,
                        lng: this.lang
                    }
                };
                console.log("ConsultantDetailsComponent -> onSave -> data1", data1);
                this.mainService.addlocation(data1).then(locData => {
                    console.log("file: consultant-details.component.ts ~ line 175 ~ ConsultantDetailsComponent ~ this.mainService.addlocation ~ locData", locData);
                    this.locationId = locData.data._id;
                    this.SaveSlots();
                }).catch(error => {
                    console.log("file: consultant-details.component.ts ~ line 182 ~ ConsultantDetailsComponent ~ this.mainService.addlocation ~ error", error);
                });
            }).catch(err => {
                console.log("file: consultant-details.component.ts ~ line 163 ~ ConsultantDetailsComponent ~ this.mainService.addclinic ~ err", err);
            });
        }
        else {
            if (this.memberForm.controls.establishmentHour.value === "sameAsEstablishmentHour") {
                const memData = {
                    clinicId: this.clinicId,
                    locationId: this.locClinicId,
                    timingId: this.timeClinicId
                };
                console.log("ConsultantDetailsComponent -> onSave -> memData", memData);
                this.mainService.addTimingVisit(memData).then(memDataTime => {
                    console.log("ConsultantDetailsComponent -> onSave -> memDataTime", memDataTime);
                    this.showToast('success', 'Profile', 'Profile updated successfully');
                });
            }
            else {
                const memData1 = {
                    clinicId: this.clinicId,
                    locationId: this.locClinicId,
                };
                console.log("ConsultantDetailsComponent -> onSave -> memData1", memData1);
                this.mainService.addTimingVisit(memData1).then(memDataTime => {
                    console.log("ConsultantDetailsComponent -> onSave -> memDataTime", memDataTime);
                    this.showToast('success', 'Profile', 'Profile updated successfully');
                });
            }
        }
        if (this.memberForm.controls.establishmentHour.value === "sameAsEstablishmentHour") {
            this.mainService.updateUserprofile(this.memberForm.value).then(resData => {
                console.log("ConsultantDetailsComponent -> onSave -> resData", resData);
                if (resData.status == 'SUCCESS') {
                    this.showToast('success', 'Profile', 'Profile updated successfully');
                    this.router.navigate(['/Doctor/Profile']);
                }
                else {
                    this.showToast('Faild', 'Profile', 'Something Went Wrong');
                }
            }).catch(error => {
                console.log("EditProfileComponent -> onSave -> error", error);
            });
        }
        else {
            this.mainService.updateUserprofile(this.memberForm.value).then(resData => {
                if (resData.status == 'SUCCESS') {
                    this.showToast('success', 'Profile', 'Profile updated successfully');
                    stepper.next();
                }
                else {
                    this.showToast('Faild', 'Profile', 'Something Went Wrong');
                }
            }).catch(error => {
                console.log("EditProfileComponent -> onSave -> error", error);
            });
        }
    }
    visiteClinic(id) {
        console.log("ConsultantDetailsComponent -> visiteClinic -> event", event);
        this.mainService.getDOCClinic(id).then(DocClinic => {
            var _a, _b, _c, _d, _e;
            console.log("ConsultantDetailsComponent -> visiteClinic -> DocClinic", DocClinic);
            this.DOCClicnicId = (_b = (_a = DocClinic.data[0]) === null || _a === void 0 ? void 0 : _a.clinicId) === null || _b === void 0 ? void 0 : _b._id;
            this.locClinicId = (_d = (_c = DocClinic.data[0]) === null || _c === void 0 ? void 0 : _c.locationId) === null || _d === void 0 ? void 0 : _d._id;
            this.timeClinicId = (_e = DocClinic.data[0]) === null || _e === void 0 ? void 0 : _e._id;
        }).catch(err => {
            console.log("ConsultantDetailsComponent -> visiteClinic -> err", err);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
    // getTime() {
    //   this.TimeSloat = [];
    //   for (var i = 0; i < 24; i++) {
    //     var hour = i < 10 ? '0' + i : i;
    //     // if (i <= 13) {
    //       this.TimeSloat.push({ label: hour + ':00', value: hour + ':00' });
    //       this.TimeSloat.push({ label: hour + ':30', value: hour + ':30' });
    //       // } else {
    //         //   this.TimeSloat2.push({ label: hour + ':00', value: hour + ':00' });
    //         //   this.TimeSloat2.push({ label: hour + ':30', value: hour + ':30' });
    //         // }
    //       }
    //       console.log("ConsultantDetailsComponent -> getTime -> this.TimeSloat", this.TimeSloat)
    // }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.columns, event.previousIndex, event.currentIndex);
    }
}
ConsultantDetailsComponent.ɵfac = function ConsultantDetailsComponent_Factory(t) { return new (t || ConsultantDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"])); };
ConsultantDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConsultantDetailsComponent, selectors: [["app-consultant-details"]], viewQuery: function ConsultantDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { stepper: "stepper" }, decls: 36, vars: 3, consts: [[1, "container"], [1, "row", 2, "margin-top", "20px"], [1, ""], [3, "formGroup"], ["class", "col-sm-12 col-md-12 col-lg-12", 4, "ngIf"], ["appearance", "fill", "style", "width: 100%;", 4, "ngIf"], [1, "form-group"], ["for", "startSession"], ["type", "number", "formControlName", "fees", "placeholder", "Enter your consultation charges", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["aria-label", "Select an option", "formControlName", "establishmentHour"], [1, "form-group-sm", "border", "py-2", "pl-2"], ["value", "sameAsEstablishmentHour"], ["value", "diffrentAsEstablishmentHour"], [1, "row"], ["mat-raised-button", "", "matStepperPrevious", "", 2, "left", "16px"], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "themeColorBtn", 2, "position", "absolute", "right", "150px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-sm-6", "col-md-3", "col-lg-3", "offset-md-1", 2, "margin-top", "120px"], [1, "", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [1, "col-sm-12", "col-md-12", "col-lg-12"], [1, "col-sm-3", "col-md-3", "col-lg-3"], ["appearance", "outline"], ["matInput", "", "placeholder", "Clinic Name", "formControlName", "clinicName"], ["matInput", "", "placeholder", "Address", "formControlName", "address"], ["matInput", "", "placeholder", "Landmark", "formControlName", "landmark"], ["formControlName", "country", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "state", 3, "selectionChange"], ["formControlName", "city", 3, "selectionChange"], [1, "row", 2, "margin-bottom", "1rem"], [1, "col-sm-12"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-table", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "dataSource", "cdkDropListDropped"], ["matColumnDef", "Day"], ["mat-header-cell", "", "cdkDrag", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width:8%", 4, "matCellDef"], ["matColumnDef", "MorningSlot", "align", "center"], ["mat-header-cell", "", "cdkDrag", "", "style", "text-align: center;background-color: #ececec;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width:22.5%;background-color: #ececec;", 4, "matCellDef"], ["matColumnDef", "AfternoonSlots"], ["mat-header-cell", "", "style", "text-align: center;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width:22.5%", 4, "matCellDef"], ["matColumnDef", "EveningSlots"], ["mat-header-cell", "", "style", "text-align: center;background-color: #ececec;", 4, "matHeaderCellDef"], ["matColumnDef", "NightSlots"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], [3, "matColumnDef"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "ngIf"], [1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-cell", "", "cdkDrag", ""], ["mat-cell", "", 2, "width", "8%"], ["mat-header-cell", "", "cdkDrag", "", 2, "text-align", "center", "background-color", "#ececec"], ["mat-cell", "", 2, "width", "22.5%", "background-color", "#ececec"], [1, "col-12"], [1, "col-6"], ["appearance", "outline", 2, "display", "block"], ["required", "", 3, "formControlName"], ["value", "06:00"], ["value", "06:30"], ["value", "07:00"], ["value", "07:30"], ["value", "08:00"], ["value", "08:30"], ["value", "09:00"], ["value", "09:30"], ["value", "10:00"], ["value", "10:30"], ["value", "11:00"], ["value", "11:30"], ["value", "11:59"], ["mat-header-cell", "", 2, "text-align", "center"], ["mat-cell", "", 2, "width", "22.5%"], ["value", "12:00"], ["value", "12:30"], ["value", "13:00"], ["value", "13:30"], ["value", "14:00"], ["value", "14:30"], ["value", "15:00"], ["value", "15:30"], ["value", "16:00"], ["value", "16:30"], ["value", "17:00"], ["value", "17:30"], ["value", "17:59"], ["mat-header-cell", "", 2, "text-align", "center", "background-color", "#ececec"], ["value", "18:00"], ["value", "18:30"], ["value", "19:00"], ["value", "19:30"], ["value", "20:00"], ["value", "20:30"], ["value", "21:00"], ["value", "21:30"], ["value", "22:00"], ["value", "22:30"], ["value", "23:00"], ["value", "23:30"], ["value", "23:59"], ["value", "00:00"], ["value", "00:30"], ["value", "01:00"], ["value", "01:30"], ["value", "02:00"], ["value", "02:30"], ["value", "03:00"], ["value", "03:30"], ["value", "04:00"], ["value", "04:30"], ["value", "05:00"], ["value", "05:30"], ["value", "05:59"], ["mat-header-row", ""], ["mat-row", ""], ["appearance", "fill", 2, "width", "100%"], ["formControlName", "ClinicName1"]], template: function ConsultantDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConsultantDetailsComponent_div_6_Template, 68, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConsultantDetailsComponent_mat_form_field_7_Template, 7, 1, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Fees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Doctor\u2019s hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Same as establishment hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Different from establishment hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsultantDetailsComponent_Template_button_click_26_listener() { return ctx.onSave(ctx.stepper); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Save and continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Establishments with more doctors get more visibility on whealthylife.in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.memberForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperPrevious"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\nspan#basic-addon1[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9jb25zdWx0YW50LWRldGFpbHMvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHByb2ZpbGVcXGNvbnN1bHRhbnQtZGV0YWlsc1xcY29uc3VsdGFudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2NvbnN1bHRhbnQtZGV0YWlscy9jb25zdWx0YW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0NGOztBRENBLG1CQUFBOztBQUVBOztFQUVFLGNBQUE7QUNDRjs7QURDQTs7RUFFRSx5QkFBQTtBQ0VGOztBRENBOzs7O0VBTUUsa0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLG1CQUFBO0VDQUY7O0VERUE7Ozs7SUFNRSxrQkFBQTtJQUNBLFdBQUE7RUNERjtBQUNGOztBREdBO0VBQ0UsZ0JBQUE7QUNERjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2NvbnN1bHRhbnQtZGV0YWlscy9jb25zdWx0YW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XHJcbn1cclxuXHJcbi50ZXh0Y29sIHtcclxuICBjb2xvcjogIzE0YWE5YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHNldHIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG4vKiBTdWNjZXNzIHN5bGluZyAqL1xyXG5cclxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMTU1NzI0O1xyXG59XHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxyXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcclxuICAvLyBjb2xvcjogI2YwZmZmMztcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAucGFkZGluZ29ueHMge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbiAgLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbiAgLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XHJcbiAgICAvLyBjb2xvcjogI2YwZmZmMztcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG5zcGFuI2Jhc2ljLWFkZG9uMSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxufVxyXG4iLCIuYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOGY2O1xufVxuXG4udGV4dGNvbCB7XG4gIGNvbG9yOiAjMTRhYTliO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmJ1dHNldHIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4vKiBTdWNjZXNzIHN5bGluZyAqL1xuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcbiAgY29sb3I6ICMxNTU3MjQ7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjM7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZhYi5tYXQtc3VjY2Vzcyxcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFkZGluZ29ueHMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuc3BhbiNiYXNpYy1hZGRvbjEge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsultantDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-consultant-details',
                templateUrl: './consultant-details.component.html',
                styleUrls: ['./consultant-details.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _services_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();
const ELEMENT_DATA = [
    { Day: 'MON', MorningSlot: 'Hydrogen', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'TUE', MorningSlot: 'Helium', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'WED', MorningSlot: 'Lithium', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'THU', MorningSlot: 'Beryllium', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'FRI', MorningSlot: 'Boron', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'SAT', MorningSlot: 'Carbon', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
    { Day: 'SUN', MorningSlot: 'Nitrogen', AfternoonSlots: 'asas', EveningSlots: 'dsasas', NightSlots: 'asde' },
];


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/dynamic-autocomplete/dynamic-autocomplete.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/dynamic-autocomplete/dynamic-autocomplete.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DynamicAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicAutocompleteComponent", function() { return DynamicAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function DynamicAutocompleteComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1054 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1054.shortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1054.shortName, " ");
} }
class DynamicAutocompleteComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.question = 'Would you like to add ';
        this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Function to call when the option changes.
        this.onChange = (option) => {
            console.log("DynamicAutocompleteComponent -> onChange -> option", option);
        };
        // Function to call when the input is touched (when the autocomplete is clicked).
        this.onTouched = () => { };
    }
    get value() {
        return this.selectedValue;
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.mainService.getDegree().then((resData) => {
            console.log("EducationComponent -> resData", resData.data);
            this.filteredOptions = this.myControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(option => option ? this.filter(option) : resData.data.slice()));
        }).catch((error) => {
            console.log("EducationComponent -> error", error);
        });
    }
    optionSelected(option) {
        if (option.value.indexOf(this.question) === 0) {
            let newOption = option.value.substring(this.question.length).split('?')[0];
            this.options.push(newOption);
            this.added.emit(newOption);
            this.myControl.setValue(newOption);
            this.writeValue(newOption);
        }
        else {
            this.myControl.setValue(option.value);
            this.writeValue(option.value);
        }
    }
    enter() {
        const controlValue = this.myControl.value;
        console.log("DynamicAutocompleteComponent -> enter -> controlValue", controlValue);
        if (!this.options.some((entry) => entry.shortName === controlValue)) {
            this.added.emit(controlValue);
            const index = this.options.push(controlValue);
            setTimeout(() => {
                this.myControl.setValue(controlValue);
                this.writeValue(controlValue);
            });
        }
        else {
            // this.writeValue(controlValue);
            this.getList();
        }
    }
    // Allows Angular to update the model (option).
    // Update the model and changes needed for the view here.
    writeValue(option) {
        this.selectedValue = option;
        this.onChange(option);
    }
    // Allows Angular to register a function to call when the model (rating) changes.
    // Save the function as a property to call later here.
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // Allows Angular to register a function to call when the input has been touched.
    // Save the function as a property to call later here.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    filter(value) {
        let results;
        if (value) {
            results = this.options
                .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
            if (results.length < 1) {
                results = [this.question + value + '?'];
            }
        }
        else {
            results = this.options.slice();
        }
        return results;
    }
}
DynamicAutocompleteComponent.ɵfac = function DynamicAutocompleteComponent_Factory(t) { return new (t || DynamicAutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"])); };
DynamicAutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicAutocompleteComponent, selectors: [["app-dynamic-autocomplete"]], inputs: { options: "options" }, outputs: { added: "added" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DynamicAutocompleteComponent),
                multi: true
            }
        ])], decls: 5, vars: 5, consts: [["type", "text", "aria-label", "Number", "matInput", "", 1, "form-control", 2, "width", "100%", 3, "formControl", "matAutocomplete", "keyup.enter"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DynamicAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function DynamicAutocompleteComponent_Template_input_keyup_enter_0_listener() { return ctx.enter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-autocomplete", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function DynamicAutocompleteComponent_Template_mat_autocomplete_optionSelected_1_listener($event) { return ctx.optionSelected($event.option); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicAutocompleteComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1052 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r1052);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.filteredOptions));
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3Byb2ZpbGUvZHluYW1pYy1hdXRvY29tcGxldGUvZHluYW1pYy1hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicAutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-autocomplete',
                templateUrl: './dynamic-autocomplete.component.html',
                styleUrls: ['./dynamic-autocomplete.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DynamicAutocompleteComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], added: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/edit-profile/edit-profile.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/edit-profile/edit-profile.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _services_speciality_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/speciality.service */ "./src/app/services/speciality.service.ts");
/* harmony import */ var _services_treatments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/treatments.service */ "./src/app/services/treatments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");



















const _c0 = ["fruitInput"];
const _c1 = ["auto"];
function EditProfileComponent_mat_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r908 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", spec_r908 == null ? null : spec_r908._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spec_r908.fullName, " ");
} }
function EditProfileComponent_mat_option_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const treat_r909 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", treat_r909._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", treat_r909.fullName, " ");
} }
function EditProfileComponent_option_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r910 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", time_r910 == null ? null : time_r910.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", time_r910 == null ? null : time_r910.value, " ");
} }
function EditProfileComponent_option_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r911 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r911 == null ? null : country_r911.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r911 == null ? null : country_r911.name, "");
} }
function EditProfileComponent_option_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r912 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r912 == null ? null : state_r912.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r912 == null ? null : state_r912.name, "");
} }
function EditProfileComponent_option_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r913 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r913 == null ? null : city_r913.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r913 == null ? null : city_r913.name, "");
} }
function EditProfileComponent_mat_option_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r914 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r914.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r914.label, " ");
} }
class EditProfileComponent {
    constructor(mainService, uploadService, messageService, SpecialityService, TreatmentsService, router, fb) {
        this.mainService = mainService;
        this.uploadService = uploadService;
        this.messageService = messageService;
        this.SpecialityService = SpecialityService;
        this.TreatmentsService = TreatmentsService;
        this.router = router;
        this.fb = fb;
        this.countryList = [];
        this.stateList = [];
        this.cityList = [];
        this.languages = [
            { label: "kanada", value: "kanada" },
            { label: "English", value: "English" },
            { label: "Marathi", value: "Marathi" },
            { label: "Hindi", value: "Hindi" },
            { label: "Bengali", value: "Bengali" },
        ];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.allFruits = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];
        this.treatment = [];
        this.addOption = false;
        this.element1 = [];
        this.tempData1 = [];
        this.specialitie = [];
        this.specializationArray = [];
        this.treatmentArray = [];
        this.specialityFilter = [];
        this.specialitiesId = [];
        this.treatmentID = [];
        this.profileForm = fb.group({
            avatar: [''],
            firstName: [''],
            lastName: [''],
            mobileNumber: [''],
            email: [''],
            gender: [''],
            dob: [''],
            specialitie: [''],
            treatment: [''],
            bloodGroup: [''],
            timeZone: [''],
            address: [''],
            landmark: [''],
            country: [''],
            state: [''],
            city: [''],
            pincode: [''],
            extraPhoneNumber: [''],
            language: ['']
        });
    }
    ngOnInit() {
        this.getProfile();
        this.getSpeciality();
        this.treatmentAll();
        this.getCountry();
        this.getTimeZone();
        this.profileForm.controls.specialitie.valueChanges.subscribe(resData => {
            this.specialityId = resData;
        });
        this.profileForm.controls.treatment.valueChanges.subscribe(resData => {
            this.treatmentId = resData;
        });
        this.profileForm.controls.country.valueChanges.subscribe(resData => {
            this.countryId = resData;
        });
        this.profileForm.controls.state.valueChanges.subscribe(resData => {
            this.stateid = resData;
        });
        this.profileForm.controls.city.valueChanges.subscribe(resData => {
            this.cityid = resData;
        });
    }
    browseFile(event) {
        const file = event.target.files;
        this.uploadService
            .upload(file)
            .then((res) => {
            this.avatar = res.files[0];
        })
            .catch((error) => {
            console.error("error", error);
        });
    }
    getProfile() {
        this.mainService
            .getProfile()
            .then((resData) => {
            console.log("file: edit-profile.component.ts ~ line 138 ~ EditProfileComponent ~ .then ~ resData", resData);
            const profileData = resData.data;
            console.log("file: edit-profile.component.ts ~ line 157 ~ EditProfileComponent ~ .then ~ profileData", profileData);
            this.SpecialityService.getDoctorSpecility().then(specData => {
                for (let i = 0; i < specData.data.length; i++) {
                    this.specialitiesId[i] = specData.data[i].specializationId._id;
                }
                this.profileForm.controls.specialitie.patchValue(this.specialitiesId);
            });
            this.TreatmentsService.getDoctreatment().then(trtData => {
                for (let i = 0; i < trtData.data.length; i++) {
                    this.treatmentID[i] = trtData.data[i].treatmentId._id;
                }
                this.profileForm.controls.treatment.patchValue(this.treatmentID);
            });
            this.profileForm.patchValue({
                firstName: profileData.firstName,
                lastName: profileData.lastName,
                mobileNumber: profileData.mobileNumber,
                email: profileData.email,
                gender: profileData.gender,
                dob: profileData.dob ? new Date(profileData.dob) : null,
                bloodGroup: profileData.bloodGroup,
                timeZone: profileData.timeZone,
                address: profileData.location.address,
                landmark: profileData.location.landmark,
                country: profileData.location.country,
                state: profileData.location.state,
                city: profileData.location.city,
                pincode: profileData.location.pincode,
                extraPhoneNumber: profileData.extraPhoneNumber,
                language: profileData.language
            });
            this.avatar = profileData.avatar;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    getSpeciality() {
        this.SpecialityService.getSpecialization()
            .then((resData) => {
            this.speciality = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    treatmentAll() {
        this.TreatmentsService.getAllTreatment()
            .then((resdata) => {
            this.treatment1 = resdata.data;
        })
            .catch((err) => {
            console.log("EditProfileComponent -> onChange -> err", err);
        });
    }
    getCountry() {
        this.mainService
            .getCountry()
            .then((resData) => {
            this.countryList = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    getState() {
        this.mainService
            .getState(this.countryId)
            .then((resData) => {
            this.stateList = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    getCity() {
        this.mainService
            .getCity(this.stateid)
            .then((resData) => {
            this.cityList = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    getTimeZone() {
        this.mainService
            .getTimeZone()
            .then((resData) => {
            this.timeZone = resData.data;
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getCountry -> error", error);
        });
    }
    onInput(e) {
        this.speciality = this.speciality.filter((ele) => ele.fullName.toLowerCase().includes(e.target.value.toLowerCase()));
        if (this.speciality.length === 0) {
            this.ngOnInit();
        }
    }
    onInput1(e) {
        this.treatment1 = this.treatment1.filter((ele) => ele.fullName.toLowerCase().includes(e.target.value.toLowerCase()));
        this.treatment1 = [];
        if (this.treatment1.length === 0) {
            this.ngOnInit();
        }
    }
    onSave() {
        var data = Object.assign(Object.assign({}, this.profileForm.value), { avatar: this.avatar, dob: this.profileForm.value.dob, location: {
                address: this.profileForm.value.address,
                landmark: this.profileForm.value.landmark,
                state: this.stateid,
                city: this.cityid,
                pincode: this.profileForm.value.pincode,
                country: this.countryId,
            }, timeZone: this.profileForm.value.timeZone });
        this.mainService
            .updateUserprofile(data)
            .then((resData) => {
            this.showToast("success", "Profile", "Profile updated successfully");
            this.router.navigate(['/Doctor']);
        })
            .catch((error) => {
            console.log("EditProfileComponent -> onSave -> error", error);
        });
        const data1 = {
            specializationArray: this.specialityId
        };
        this.SpecialityService.addSpecialization(data1).then(SpecData => {
        }).catch(err => {
            console.log("file: edit-profile.component.ts ~ line 276 ~ EditProfileComponent ~ this.TreatmentsService.addDoctorTreatment ~ err", err);
        });
        const data2 = {
            treatmentArray: this.treatmentId
        };
        this.TreatmentsService.addDoctorTreatment(data2).then(TreatData => {
        }).catch(err => {
            console.log("file: edit-profile.component.ts ~ line 313 ~ EditProfileComponent ~ this.TreatmentsService.addDoctorTreatment ~ err", err);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({
                severity: type,
                summary: messageType,
                detail: message,
            });
        });
    }
    isNumber(evt) {
        evt = evt ? evt : window.event;
        var charCode = evt.which ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            console.log("EditProfileComponent -> isNumber -> evt", evt);
            evt.preventDefault();
            return;
        }
        return;
    }
}
EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_speciality_service__WEBPACK_IMPORTED_MODULE_6__["SpecialityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_treatments_service__WEBPACK_IMPORTED_MODULE_7__["TreatmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], viewQuery: function EditProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fruitInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
    } }, decls: 177, vars: 10, consts: [[1, "custom-error", 3, "showTransformOptions"], [1, "card", "shadow", "mb-4"], [1, "row"], [1, "col-sm-12"], [1, "card-header"], [1, "col-sm-3", "first"], [1, "font-weight-bold", "text-primary"], [1, "col-sm-9"], ["mat-raised-button", "", "color", "warn", 1, "float-right", "themeColorBtn", 3, "click"], [1, "card-body"], [1, "row", 3, "formGroup"], [1, "col-md-12", "col-sm-12"], [1, "col-sm-6", "maincol"], [1, "col-sm-6"], [1, "col-sm-6", "m-auto", "containerq"], ["onerror", "this.src='./../../../../../assets/images/doc.jpg'", 1, "profile-avtar", 2, "cursor", "pointer", 3, "src", "click"], ["type", "file", 2, "display", "none", 3, "change"], ["image", ""], [1, "overlay", "profile-avtar", 2, "margin", "auto", "text-align", "center", "cursor", "pointer", 3, "click"], [1, "material-icons"], [2, "margin", "auto", "text-align", "center"], [1, "bodhr"], [1, "form-group"], ["for", "firstname"], ["type", "text", "formControlName", "firstName", "id", "firstname", 1, "form-control"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", "id", "lastName", 1, "form-control"], [1, "col-sm-6", "mt-4"], ["for", "Specialization"], ["type", "number", "formControlName", "mobileNumber", "readonly", "", "id", "Contact", 1, "form-control"], ["for", "gstin"], ["type", "email", "formControlName", "email", "readonly", "", "id", "gstin", 1, "form-control"], ["for", "gender"], ["formControlName", "gender", "id", "gender", 1, "form-control"], ["for", "website"], ["formControlName", "dob", "placeholder", "mm/dd/yyyy"], ["for", "Specialisations"], ["formControlName", "specialitie", "placeholder", "Serach", "multiple", "", 1, "form-control"], ["placeholderLabel", "Search", 3, "onFilter"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "Treatment"], ["id", "Treatment", "formControlName", "treatment", "placeholder", "Serach", "multiple", "", 1, "form-control"], ["placeholderLabel", "Search", 3, "input"], [2, "border-top", "1px solid lightgray"], ["for", "bloodGroup"], ["id", "bloodGroup", "formControlName", "bloodGroup", "placeholder", "Select an Option", 1, "form-control"], ["for", "timezone"], ["id", "timezone", "formControlName", "timeZone", "placeholder", "Select an Option", 1, "form-control"], [1, "mainhed"], ["type", "text", "formControlName", "address", "id", "address", 1, "form-control"], ["type", "text", "formControlName", "landmark", "id", "landmark", 1, "form-control"], ["formControlName", "country", 1, "form-control", 3, "change"], ["formControlName", "state", 1, "form-control", 3, "change"], ["formControlName", "city", 1, "form-control"], ["type", "text", "maxlength", "6", "formControlName", "pincode", "id", "onlynumber", "id", "pincode", 1, "form-control"], ["type", "text", "formControlName", "extraPhoneNumber", "maxlength", "10", "id", "extraNo", 1, "form-control"], ["for", "country"], [2, "width", "100%"], ["formControlName", "language", "multiple", "", 1, "form-control"], [3, "value"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r915 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_10_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_img_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r915); const _r900 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r900.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditProfileComponent_Template_input_change_22_listener($event) { return ctx.browseFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r915); const _r900 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r900.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " cloud_upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Profile photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Date of birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "p-calendar", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Specialisations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ngx-mat-select-search", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFilter", function EditProfileComponent_Template_ngx_mat_select_search_onFilter_76_listener($event) { return ctx.onInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, EditProfileComponent_mat_option_77_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ngx-mat-select-search", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditProfileComponent_Template_ngx_mat_select_search_input_84_listener($event) { return ctx.onInput1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, EditProfileComponent_mat_option_85_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Blood group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "O+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "O-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "B+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "B-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "AB+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "AB-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Time Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, EditProfileComponent_option_113_Template, 2, 2, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " House No./ Street Name/ Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Colony / Street / Locality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditProfileComponent_Template_select_change_137_listener() { return ctx.getState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, EditProfileComponent_option_138_Template, 2, 2, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "select", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditProfileComponent_Template_select_change_144_listener() { return ctx.getCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, EditProfileComponent_option_145_Template, 2, 2, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, EditProfileComponent_option_151_Template, 2, 2, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Other information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Extra phone numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-form-field", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-select", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, EditProfileComponent_mat_option_176_Template, 2, 2, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTransformOptions", "translateX(100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.speciality);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.treatment1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeZone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["Calendar"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__["MatSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"]], styles: ["@charset \"UTF-8\";\n.avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 104px;\n  width: 105px;\n  margin: 50px auto;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 1px 1px 15px -5px black;\n  transition: all 0.3s ease;\n}\n.avatar-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.avatar-wrapper[_ngcontent-%COMP%]:hover   .profile-pic[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  transition: all 0.3s ease;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]:after {\n  font-family: FontAwesome;\n  content: \"\uF007\";\n  top: 0;\n  left: 0;\n  height: 10%;\n  width: 100%;\n  position: absolute;\n  font-size: 72px;\n  background: #ecf0f1;\n  color: #34495e;\n  text-align: center;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%]   .fa-arrow-circle-up[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 12px;\n  text-align: center;\n  opacity: 0;\n  transition: all 0.3s ease;\n  color: #34495e;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%]:hover   .fa-arrow-circle-up[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  margin-bottom: -21px;\n  background: white;\n  padding: 18px;\n}\n.btnwarn[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-right: 7%;\n  margin-top: 3%;\n}\n.c-button--primary[_ngcontent-%COMP%] {\n  background-color: #14bef0;\n  color: white;\n  float: right;\n  height: 40px;\n}\n.maincol[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n.bodhr[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n}\n.mainhed[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.profile-avtar[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 1px solid;\n  outline: none;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  background: black;\n  background: rgba(0, 0, 0, 0.5);\n  \n  color: #f1f1f1;\n  width: 150px;\n  transition: 0.5s ease;\n  opacity: 0;\n  color: white;\n  font-size: 20px;\n  padding: 20px;\n  text-align: center;\n}\n.containerq[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.material-icons[_ngcontent-%COMP%] {\n  margin-top: 86px;\n  font-family: \"Material Icons\";\n  font-size: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2VkaXQtcHJvZmlsZS9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxccHJvZmlsZVxcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7QURFRDtBQ0RDO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0FER0Y7QUNEQztFQUNDLFlBQUE7QURHRjtBQ0RDO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBREdGO0FDRkU7RUFDQyx3QkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURJSDtBQ0RDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FER0Y7QUNGRTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QURJSDtBQ0ZFO0VBQ0MsWUFBQTtBRElIO0FDQUE7RUFDQyxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBREdEO0FDQUE7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBREdEO0FDQUE7RUFDQyx5QkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtBREVEO0FDQ0E7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QURFRDtBQ0NBO0VBQ0MsK0JBQUE7QURFRDtBQ0NBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QURFRDtBQ0NBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBREVEO0FDQ0E7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQWdDLHNCQUFBO0VBQ2hDLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURHRDtBQ0FFO0VBQ0QsVUFBQTtBREdEO0FDS0E7RUFDQyxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBREZEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmF2YXRhci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwNHB4O1xuICB3aWR0aDogMTA1cHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCAtNXB4IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmF2YXRhci13cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF2YXRhci13cmFwcGVyOmhvdmVyIC5wcm9maWxlLXBpYyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5hdmF0YXItd3JhcHBlciAucHJvZmlsZS1waWMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmF2YXRhci13cmFwcGVyIC5wcm9maWxlLXBpYzphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCLvgIdcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICBjb2xvcjogIzM0NDk1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF2YXRhci13cmFwcGVyIC51cGxvYWQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXZhdGFyLXdyYXBwZXIgLnVwbG9hZC1idXR0b24gLmZhLWFycm93LWNpcmNsZS11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGNvbG9yOiAjMzQ0OTVlO1xufVxuLmF2YXRhci13cmFwcGVyIC51cGxvYWQtYnV0dG9uOmhvdmVyIC5mYS1hcnJvdy1jaXJjbGUtdXAge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBtYXJnaW4tYm90dG9tOiAtMjFweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi5idG53YXJuIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNyU7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4uYy1idXR0b24tLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiZWYwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubWFpbmNvbCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLmJvZGhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLm1haW5oZWQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ZpbGUtYXZ0YXIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIHNlZS10aHJvdWdoICovXG4gIGNvbG9yOiAjZjFmMWYxO1xuICB3aWR0aDogMTUwcHg7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcnE6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBtYXJnaW4tdG9wOiA4NnB4O1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXNpemU6IDM4cHg7XG59IiwiLmF2YXRhci13cmFwcGVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiAxMDRweDtcclxuXHR3aWR0aDogMTA1cHg7XHJcblx0bWFyZ2luOiA1MHB4IGF1dG87XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym94LXNoYWRvdzogMXB4IDFweCAxNXB4IC01cHggYmxhY2s7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHQmOmhvdmVyIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cdCY6aG92ZXIgLnByb2ZpbGUtcGljIHtcclxuXHRcdG9wYWNpdHk6IDAuNTtcclxuXHR9XHJcblx0LnByb2ZpbGUtcGljIHtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcblx0XHRcdGNvbnRlbnQ6IFwiXFxmMDA3XCI7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0aGVpZ2h0OiAxMCU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGZvbnQtc2l6ZTogNzJweDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2VjZjBmMTtcclxuXHRcdFx0Y29sb3I6ICMzNDQ5NWU7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblx0LnVwbG9hZC1idXR0b24ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LmZhLWFycm93LWNpcmNsZS11cCB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAxNXB4O1xyXG5cdFx0XHRsZWZ0OiAxMnB4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblx0XHRcdGNvbG9yOiAjMzQ0OTVlO1xyXG5cdFx0fVxyXG5cdFx0Jjpob3ZlciAuZmEtYXJyb3ctY2lyY2xlLXVwIHtcclxuXHRcdFx0b3BhY2l0eTogMC45O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uanVtYm90cm9uIHtcclxuXHRtYXJnaW4tYm90dG9tOiAtMjFweDtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAxOHB4O1xyXG59XHJcblxyXG4uYnRud2FybiB7XHJcblx0ZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLXJpZ2h0OiA3JTtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLmMtYnV0dG9uLS1wcmltYXJ5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiZWYwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLm1haW5jb2wge1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxuXHRtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uYm9kaHIge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5tYWluaGVkIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWF2dGFyIHtcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQ7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcblx0dG9wOiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIHNlZS10aHJvdWdoICovXHJcblx0Y29sb3I6ICNmMWYxZjE7IFxyXG5cdHdpZHRoOiAxNTBweDtcclxuXHR0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuXHRvcGFjaXR5OjA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcnE6aG92ZXIgLm92ZXJsYXkge1xyXG5cdG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuLy8gLm92ZXJsYXkge1xyXG4vLyBcdG9wYWNpdHk6IDE7XHJcbi8vICAgfVxyXG5cclxuXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuXHRtYXJnaW4tdG9wOiA4NnB4O1xyXG5cdGZvbnQtZmFtaWx5OidNYXRlcmlhbCBJY29ucyc7XHJcblx0Zm9udC1zaXplOiAzOHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-edit-profile",
                templateUrl: "./edit-profile.component.html",
                styleUrls: ["./edit-profile.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: _services_speciality_service__WEBPACK_IMPORTED_MODULE_6__["SpecialityService"] }, { type: _services_treatments_service__WEBPACK_IMPORTED_MODULE_7__["TreatmentsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { fruitInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fruitInput"]
        }], matAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["auto"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/education/education.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/education/education.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function EducationComponent_div_5_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const street_r924 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", street_r924.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", street_r924.degree, " ");
} }
function EducationComponent_div_5_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r926 = ctx.index;
    const ctx_r922 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r922.year - i_r926);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r922.year - i_r926, " ");
} }
function EducationComponent_div_5_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r929 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_5_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r929); const fo_r918 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r927 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r927.remDegree(fo_r918); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r931 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EducationComponent_div_5_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r931); const _r919 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r930 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r930.EnterValu(_r919.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EducationComponent_div_5_mat_option_8_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_5_Template_mat_option_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r931); const _r919 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r932 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r932.AddDegree(_r919.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "College");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Registration Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EducationComponent_div_5_option_19_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EducationComponent_div_5_button_21_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_5_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r931); const ctx_r933 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r933.addPostService(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fo_r918 = ctx.index;
    const _r919 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r920 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r916 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", fo_r918);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r920);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r916.Degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _r919.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r919.value + " ", " Click to add Degree ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r916.ylength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r916.getControlName("qualificationArray").length > 1);
} }
class EducationComponent {
    constructor(fb, MainService, messageService) {
        this.fb = fb;
        this.MainService = MainService;
        this.messageService = messageService;
        this.reg = this.fb.group({});
        this.arrdata = [];
        this.lengthValue = 0;
        this.ylength = [];
    }
    ngOnInit() {
        this.InitPostService();
        this.getDegreesOnline();
        this.getAll();
        this.reg.valueChanges.subscribe((resData) => {
            this.ylength.length = 85;
            this.year = new Date().getFullYear();
            console.log("EducationComponent -> ngOnInit -> resData", resData);
        });
        this.reg.controls["qualificationArray"].valueChanges.subscribe((resData) => {
            console.log("EducationComponent -> ngOnInit -> resData", resData);
        });
    }
    getAll() {
        this.MainService.getDegree().then((resD) => {
            this.allDegree = resD.data;
            this.Degree = this.allDegree;
        }).catch((err) => {
            console.log("EducationComponent -> ngOnInit -> err", err);
        });
    }
    AddDegree(val) {
        console.log("EducationComponent -> AddDegree -> val", val);
        this.MainService.addDegree({ degree: val }).then((resData) => {
            console.log("EducationComponent -> AddDegree -> resData", resData);
            this.getAll();
        }).catch((err) => {
            console.log("EducationComponent -> AddDegree -> err", err);
        });
    }
    EnterValu(val) {
        const data = val.toLowerCase();
        this.Degree = this.allDegree.filter((x) => x.degree.toLowerCase().includes(data));
        if (this.Degree.length != 0) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
    getDegreesOnline() {
        this.MainService.getDoctorEducation().then((resDtat) => {
            const Data = [];
            resDtat.data.forEach((element, i) => {
                if (i + 1 != resDtat.data.length) {
                    this.reg.controls["qualificationArray"]["controls"].push(this.fb.group({
                        degree: [""],
                        qualificationId: [""],
                        completionYear: [""],
                        college: [""],
                    }));
                }
                Data.push({
                    degree: element.degree,
                    qualificationId: element.qualificationId,
                    completionYear: element.completionYear,
                    college: element.college,
                });
            });
            this.reg.controls["qualificationArray"].patchValue(Data);
        });
    }
    InitPostService() {
        this.reg.addControl("qualificationArray", this.fb.array([
            this.fb.group({
                degree: [""],
                qualificationId: [""],
                completionYear: [""],
                college: [""],
            }),
        ]));
    }
    addPostService() {
        this.reg.controls["qualificationArray"]["controls"].push(this.fb.group({
            degree: [""],
            qualificationId: [""],
            completionYear: [""],
            college: [""],
        }));
    }
    getControlName(controlName) {
        return this.reg.controls[controlName]["controls"];
    }
    remDegree(rem) {
        this.reg.controls["qualificationArray"]["controls"].splice(rem, 1);
    }
    save() {
        this.arrdata = [];
        this.reg.value;
        const data = this.reg.controls["qualificationArray"]["controls"];
        data.forEach((element) => {
            this.arrdata.push(element.value);
        });
        this.arrdata.forEach((element, i) => {
            const degId = this.allDegree.filter((x) => x.degree == element.degree);
            console.log("EducationComponent -> save -> degId", degId[0]._id);
            this.arrdata[i].qualificationId = degId[0]._id;
        });
        console.log("EducationComponent -> save -> this.arrdata", this.arrdata);
        const daya = { qualificationArray: this.arrdata };
        this.MainService.addDoctorDegree(daya).then((resData) => {
            console.log("EducationComponent -> save -> resData", resData);
            this.showToast('success', 'Profile', 'Education Qualification Add Succefully');
            this.stepper.next();
        }).catch((err) => {
            console.log("EducationComponent -> save -> err", err);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], inputs: { stepper: "stepper" }, decls: 21, vars: 2, consts: [[1, "bg-white", "p-sm-3"], [1, "row"], [1, "col-md-5", "col-lg-3", "offset-md-2"], [3, "formGroup"], ["formArrayName", "qualificationArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "mt-5", "mb-3"], ["mat-raised-button", "", "matStepperPrevious", "", 1, "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "ml-2", "themeColorBtn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-md-3", "col-lg-5", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [3, "formGroupName"], [1, "form-group-sm", "mb-3"], ["for", "RegistrationNumber"], ["type", "text", "placeholder", "Enter Degree", "formControlName", "degree", 1, "form-control", 3, "matAutocomplete", "keyup"], ["box", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "form-group"], ["for", "RegistrationCouncil"], ["type", "text", "id", "registrationNumber", "formControlName", "college", "placeholder", "Enter your council", 1, "form-control"], ["for", "RegistrationYear"], ["id", "completionYear", "formControlName", "completionYear", 1, "form-control"], [1, "col-12", "mb-5"], ["mat-mini-fab", "", "color", "warn", "class", "mx-2 float-right", "aria-label", "Example icon button with a menu icon", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon", 1, "mx-2", "float-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus", "text-white"], [3, "value"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a menu icon", 1, "mx-2", "float-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-minus", "text-white"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EducationComponent_div_5_Template, 24, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_11_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Save and Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " On WhealthyLife, doctors are listed under the relevant specializations based on their academic degrees. Both, education and years of experience, showcase doctor\u2019s expertise and are among the top 3 things that patients consider while making their decision ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getControlName("qualificationArray"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.display-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.error-block[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n\n.danger[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9lZHVjYXRpb24vQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHByb2ZpbGVcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBRENBLG1CQUFBOztBQUVBOztFQUVJLGNBQUE7QUNDSjs7QURDQTs7RUFFRSx5QkFBQTtBQ0VGOztBRENBOzs7O0VBTUUsa0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDSTtJQUNJLG1CQUFBO0VDQU47O0VERUU7Ozs7SUFJRixjQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNDQTtBQUNGOztBREdBO0VBQ0ksY0FBQTtBQ0RKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcclxufVxyXG5cclxuLnRleHRjb2wge1xyXG4gICAgY29sb3I6ICMxNGFhOWI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjUwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXRzZXRyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi8qIFN1Y2Nlc3Mgc3lsaW5nICovXHJcblxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlcixcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZhYi5tYXQtc3VjY2VzcyxcclxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XHJcbi8vICAgY29sb3I6ICNmMGZmZjM7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgLnBhZGRpbmdvbnhze1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MzBweCA7XHJcbiAgICB9ICBcclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZjBmZmYzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG5cclxufSBcclxufVxyXG5cclxuLmRpc3BsYXktYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmVycm9yLWJsb2NrIHtcclxuICAgIGNvbG9yOiAjZTM1YTQ5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5kYW5nZXJ7XHJcbiAgICBjb2xvcjogI2UzNWE0OTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSIsIi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XG59XG5cbi50ZXh0Y29sIHtcbiAgY29sb3I6ICMxNGFhOWI7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYnV0c2V0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIFN1Y2Nlc3Mgc3lsaW5nICovXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzE1NTcyNDtcbn1cblxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYWRkaW5nb254cyB7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZhYi5tYXQtc3VjY2Vzcyxcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjZjBmZmYzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICB9XG59XG4uZGlzcGxheS1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXJyb3ItYmxvY2sge1xuICBjb2xvcjogI2UzNWE0OTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6ICNlMzVhNDk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-education",
                templateUrl: "./education.component.html",
                styleUrls: ["./education.component.scss"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/identity-proof/identity-proof.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/identity-proof/identity-proof.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IdentityProofComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityProofComponent", function() { return IdentityProofComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registration_proof_registration_proof_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../registration-proof/registration-proof.component */ "./src/app/modules/doctor-dashbord/profile/registration-proof/registration-proof.component.ts");
/* harmony import */ var _clinic_proof_clinic_proof_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../clinic-proof/clinic-proof.component */ "./src/app/modules/doctor-dashbord/profile/clinic-proof/clinic-proof.component.ts");













const _c0 = ["stepper"];
function IdentityProofComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Identity Proof");
} }
function IdentityProofComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "One file is Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdentityProofComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Uplopad is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IdentityProofComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Registration");
} }
function IdentityProofComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Establishment Proof");
} }
const _c1 = function () { return ["/Doctor/Profile"]; };
class IdentityProofComponent {
    constructor(mainService, messageService, uploadService, fb) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.uploadService = uploadService;
        this.fb = fb;
        this.items = [];
        this.submitted = false;
        this.Twoimgarray = ['', ''];
        this.getProfile();
    }
    ngOnInit() {
        this.firstFormGroup = this.fb.group({});
        this.secondFormGroup = this.fb.group({});
        this.thirdFormGroup = this.fb.group({});
    }
    getProfile() {
        this.mainService.getProfile().then(resData => {
            console.log("IdentityProofComponent -> getProfile -> resData", resData);
            this.profileData = resData.data;
            this.Twoimgarray = resData.data.identityFile;
        }).catch(error => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    onSave(stepper) {
        if (this.identityFile == '') {
            return;
        }
        const data = {
            identityFile: this.Twoimgarray
        };
        console.log("IdentityProofComponent -> onSave -> data", data);
        this.mainService.updateUserprofile(data).then(resData => {
            this.showToast('success', 'Profile', 'Profile updated successfully');
            stepper.next();
        }).catch(error => {
            console.log("EditProfileComponent -> onSave -> error", error);
        });
    }
    browseFile1(event) {
        const file = event.target.files;
        this.uploadService.upload(file).then(res => {
            this.Twoimgarray[0] = res.files[0];
        }).catch(error => {
            console.error('error', error);
        });
    }
    browseFile2(event) {
        const file = event.target.files;
        this.uploadService.upload(file).then(res => {
            this.Twoimgarray[1] = res.files[0];
        }).catch(error => {
            console.error('error', error);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
}
IdentityProofComponent.ɵfac = function IdentityProofComponent_Factory(t) { return new (t || IdentityProofComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
IdentityProofComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdentityProofComponent, selectors: [["app-identity-proof"]], viewQuery: function IdentityProofComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 78, vars: 18, consts: [[1, "custom-error", 3, "showTransformOptions"], ["labelPosition", "bottom", "linear", "", "mode", "", 3, "linear"], ["stepper", ""], ["disableRipple", "true", 3, "stepControl"], ["matStepLabel", ""], [1, "bg-white", "p-sm-3"], [1, "row"], [3, "formGroup"], [1, "col-md-5", "col-lg-3", "offset-md-2"], [1, "mb-2", 2, "font-size", "15px"], [1, "col-12"], [1, "row", 2, "border", "1px solid lightgray"], [1, "col-6", 2, "padding", "0px"], [1, "img-fluid", 2, "padding", "0px", "width", "100%", "height", "150px", "background-color", "#eadfdf", 3, "src"], ["type", "file", 1, "d-none", 3, "change"], ["file1", ""], [1, "btn", "border", "bg-white", "z-index", 2, "position", "absolute", "top", "0", "left", "0", "font-size", "1rem !important", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", 2, "margin", "0px"], ["file2", ""], [1, "border", "m-auto"], [4, "ngIf"], ["class", "error-block display-block", 4, "ngIf"], [1, "pt-2", 2, "font-size", "12px"], [1, "inside1"], ["mat-raised-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "themeColorBtn", 2, "margin-left", "10px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-md-3", "col-lg-5", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [3, "stepper"], [1, "error-block", "display-block"]], template: function IdentityProofComponent_Template(rf, ctx) { if (rf & 1) {
        const _r956 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IdentityProofComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IdentityProofComponent_Template_input_change_18_listener($event) { return ctx.browseFile1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityProofComponent_Template_span_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r956); const _r950 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r950.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IdentityProofComponent_Template_input_change_24_listener($event) { return ctx.browseFile2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityProofComponent_Template_span_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r956); const _r951 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return _r951.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IdentityProofComponent_div_29_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, IdentityProofComponent_div_30_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Please upload your identity proof to ensure that the ownership of your profile remains with only you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Acceptable documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Aadhar Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Driving License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Voter Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Any other Govt. ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Extra proofs required to be uploaded:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1. Medical Registration Proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2. Establishment Proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentityProofComponent_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r956); const _r948 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSave(_r948); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Save and continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 2.5M patients are looking for a doctor on WhealthyLife. Verify your credentials and reach out to them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, IdentityProofComponent_ng_template_72_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-registration-proof", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, IdentityProofComponent_ng_template_76_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-clinic-proof", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r948 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTransformOptions", "translateX(100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.Twoimgarray[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.Twoimgarray[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identityFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identityFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepper", _r948);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepper", _r948);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _registration_proof_registration_proof_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationProofComponent"], _clinic_proof_clinic_proof_component__WEBPACK_IMPORTED_MODULE_11__["ClinicProofComponent"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.bgh[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  text-align: center;\n  position: relative;\n  background-color: #ccced424;\n}\n\n.inside1[_ngcontent-%COMP%] {\n  list-style: inside;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.selected-file[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  z-index: 90;\n}\n\n.z-index[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: inherit;\n}\n\n.display-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.error-block[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n\n.danger[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9pZGVudGl0eS1wcm9vZi9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxccHJvZmlsZVxcaWRlbnRpdHktcHJvb2ZcXGlkZW50aXR5LXByb29mLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2lkZW50aXR5LXByb29mL2lkZW50aXR5LXByb29mLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNFSjs7QURBQSxtQkFBQTs7QUFFQTs7RUFFSSxjQUFBO0FDRUo7O0FEQUE7O0VBRUkseUJBQUE7QUNHSjs7QURBQTs7OztFQU1JLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxtQkFBQTtFQ0NOOztFRENFOzs7O0lBSUksY0FBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDRU47QUFDRjs7QURBQTtFQUNJLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL2lkZW50aXR5LXByb29mL2lkZW50aXR5LXByb29mLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XHJcbn1cclxuXHJcbi50ZXh0Y29sIHtcclxuICAgIGNvbG9yOiAjMTRhYTliO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXRzZXRyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYmdoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NlZDQyNDtcclxufVxyXG5cclxuLmluc2lkZTEge1xyXG4gICAgbGlzdC1zdHlsZTogaW5zaWRlO1xyXG59XHJcbi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOGY2O1xyXG59XHJcblxyXG4udGV4dGNvbCB7XHJcbiAgICBjb2xvcjogIzE0YWE5YjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0c2V0ciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4vKiBTdWNjZXNzIHN5bGluZyAqL1xyXG5cclxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbn1cclxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXHJcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZhYi5tYXQtc3VjY2VzcyxcclxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XHJcbiAgICAvLyAgIGNvbG9yOiAjZjBmZmYzO1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAucGFkZGluZ29ueHMge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbiAgICAubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4gICAgLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbiAgICAubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcclxuICAgICAgICBjb2xvcjogI2YwZmZmMztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgIH1cclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWZpbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiA5MDtcclxufVxyXG5cclxuLnotaW5kZXh7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuLmRpc3BsYXktYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmVycm9yLWJsb2NrIHtcclxuICAgIGNvbG9yOiAjZTM1YTQ5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5kYW5nZXJ7XHJcbiAgICBjb2xvcjogI2UzNWE0OTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSIsIi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XG59XG5cbi50ZXh0Y29sIHtcbiAgY29sb3I6ICMxNGFhOWI7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYnV0c2V0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5iZ2gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NlZDQyNDtcbn1cblxuLmluc2lkZTEge1xuICBsaXN0LXN0eWxlOiBpbnNpZGU7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XG59XG5cbi50ZXh0Y29sIHtcbiAgY29sb3I6ICMxNGFhOWI7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYnV0c2V0ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIFN1Y2Nlc3Mgc3lsaW5nICovXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzE1NTcyNDtcbn1cblxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYWRkaW5nb254cyB7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZhYi5tYXQtc3VjY2Vzcyxcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjZjBmZmYzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICB9XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uc2VsZWN0ZWQtZmlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiA5MDtcbn1cblxuLnotaW5kZXgge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xufVxuXG4uZGlzcGxheS1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZXJyb3ItYmxvY2sge1xuICBjb2xvcjogI2UzNWE0OTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6ICNlMzVhNDk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentityProofComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-identity-proof',
                templateUrl: './identity-proof.component.html',
                styleUrls: ['./identity-proof.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/profile-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/profile-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/modules/doctor-dashbord/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _clinic_details_clinic_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinic-details/clinic-details.component */ "./src/app/modules/doctor-dashbord/profile/clinic-details/clinic-details.component.ts");
/* harmony import */ var _connect_clinic_connect_clinic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect-clinic/connect-clinic.component */ "./src/app/modules/doctor-dashbord/profile/connect-clinic/connect-clinic.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component */ "./src/app/modules/doctor-dashbord/profile/education/education.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/modules/doctor-dashbord/profile/registration/registration.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/modules/doctor-dashbord/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _identity_proof_identity_proof_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./identity-proof/identity-proof.component */ "./src/app/modules/doctor-dashbord/profile/identity-proof/identity-proof.component.ts");
/* harmony import */ var _registration_proof_registration_proof_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration-proof/registration-proof.component */ "./src/app/modules/doctor-dashbord/profile/registration-proof/registration-proof.component.ts");
/* harmony import */ var _clinic_proof_clinic_proof_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clinic-proof/clinic-proof.component */ "./src/app/modules/doctor-dashbord/profile/clinic-proof/clinic-proof.component.ts");
/* harmony import */ var _clinic_location_clinic_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clinic-location/clinic-location.component */ "./src/app/modules/doctor-dashbord/profile/clinic-location/clinic-location.component.ts");
/* harmony import */ var _clinic_timings_clinic_timings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clinic-timings/clinic-timings.component */ "./src/app/modules/doctor-dashbord/profile/clinic-timings/clinic-timings.component.ts");
/* harmony import */ var _consultant_details_consultant_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./consultant-details/consultant-details.component */ "./src/app/modules/doctor-dashbord/profile/consultant-details/consultant-details.component.ts");
















const routes = [
    {
        path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    },
    {
        path: 'Registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    },
    {
        path: 'Education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"]
    },
    {
        path: 'Connect_clinic', component: _connect_clinic_connect_clinic_component__WEBPACK_IMPORTED_MODULE_2__["ConnectClinicComponent"]
    },
    {
        path: 'Clinic_details', component: _clinic_details_clinic_details_component__WEBPACK_IMPORTED_MODULE_1__["ClinicDetailsComponent"]
    },
    {
        path: 'Identity_proof', component: _identity_proof_identity_proof_component__WEBPACK_IMPORTED_MODULE_8__["IdentityProofComponent"]
    },
    {
        path: 'Registration_proof', component: _registration_proof_registration_proof_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationProofComponent"]
    },
    {
        path: 'Clinic_proof', component: _clinic_proof_clinic_proof_component__WEBPACK_IMPORTED_MODULE_10__["ClinicProofComponent"]
    },
    {
        path: 'Clinic_location', component: _clinic_location_clinic_location_component__WEBPACK_IMPORTED_MODULE_11__["ClinicLocationComponent"]
    },
    {
        path: 'Clinic_timings', component: _clinic_timings_clinic_timings_component__WEBPACK_IMPORTED_MODULE_12__["ClinicTimingsComponent"]
    },
    {
        path: 'Consultant_details', component: _consultant_details_consultant_details_component__WEBPACK_IMPORTED_MODULE_13__["ConsultantDetailsComponent"]
    },
    {
        path: 'edit_profile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__["EditProfileComponent"]
    }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](ProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/doctor-profile.service */ "./src/app/services/doctor-profile.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function () { return ["edit_profile"]; };
const _c1 = function () { return ["Registration"]; };
const _c2 = function () { return ["Identity_proof"]; };
const _c3 = function () { return ["Clinic_location"]; };
class ProfileComponent {
    constructor(mainService, UserService, DoctorProfileService) {
        this.mainService = mainService;
        this.UserService = UserService;
        this.DoctorProfileService = DoctorProfileService;
        this.cook = UserService.getUserInfo();
        this.getDoctodata(this.cook._id);
    }
    getDoctodata(data) {
        this.DoctorProfileService.getDoctorProfileid(data).then((resData) => {
            console.log("ProfileComponent -> getDoctodata -> resData", resData);
        }).catch((errr) => {
            console.log("ProfileComponent -> getDoctodata -> errr", errr);
        });
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_3__["DoctorProfileService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 49, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "mb-4", "h1", "font-weight-bold", "text-dark"], [1, "col-10", "ofsset-2"], ["mat-raised-button", "", "routerLinkActive", "router-link-active", 2, "background-color", "#45a29e", "color", "white", "float", "right", 3, "routerLink"], [1, "bg-white"], [1, "col-sm-12", "col-md-5", "col-lg-5"], [1, "pl-5", "pr-5", "pt-5", "pb-2"], [1, "h1", "font-weight-bold", "text-dark", "mt-0"], [1, "text-dark", "large", "pt-2", "pb-4"], [1, "stext", "mb-0"], [1, "text-dark", "large"], ["mat-raised-button", "", "routerLinkActive", "router-link-active", 2, "background-color", "#45a29e", "color", "white", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-certificate"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "mb-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-7"], ["src", "../../../../assets/img/Practo.jpg", "alt", "", 1, "img", "pl-md-5"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Great Progress!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "P", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Your profile is just few steps away from going live.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Section A: Profile details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Doctor\u2019s basic details, medical registration, education qualification, establishment details etc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Section B: Profile verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Doctor identity proof, registration proof, establishment ownership proof etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Step C: Start getting patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Location, Timings, Fees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Basic details about your practice helps patients reach you easily for appointment booking and inquiries.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid #e3e6f0;\n  width: 100%;\n  border-radius: 0.35rem;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: 40px;\n  margin-left: -50px;\n  margin-bottom: 40px;\n}\n\n.large[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.stext[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.lht[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-button-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  color: #f0fff3;\n  background-color: #f6c23e;\n}\n\n.mat-icon-button.mat-success[_ngcontent-%COMP%] {\n  color: #f6c23e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURBQzs7RUFFQyxpQkFBQTtBQ0dGOztBREFBLG1CQUFBOztBQUVBOztFQUVJLGNBQUE7QUNFSjs7QURBQTs7RUFFRSx5QkFBQTtBQ0dGOztBREFBOzs7O0VBSUUsY0FBQTtFQUNBLHlCQUFBO0FDR0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlNmYwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmxhcmdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnN0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxodCB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMS41MHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcclxufVxyXG5cclxuLnRleHRjb2wge1xyXG4gICAgY29sb3I6ICMxNGFhOWI7XHJcbn0uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLyogU3VjY2VzcyBzeWxpbmcgKi9cclxuXHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG59XHJcbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxyXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxyXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcclxuICBjb2xvcjogI2YwZmZmMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gIFxyXG59XHJcblxyXG4ubWF0LWljb24tYnV0dG9uLm1hdC1zdWNjZXNzIHtcclxuICBjb2xvcjojZjZjMjNlO1xyXG59XHJcbiIsIi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlNmYwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmxhcmdlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc3RleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5saHQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcbn1cblxuLnRleHRjb2wge1xuICBjb2xvcjogIzE0YWE5Yjtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLyogU3VjY2VzcyBzeWxpbmcgKi9cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3Zlcixcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgY29sb3I6ICNmMGZmZjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjogI2Y2YzIzZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_3__["DoctorProfileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/profile.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/profile.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/modules/doctor-dashbord/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/modules/doctor-dashbord/profile/profile-routing.module.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/modules/doctor-dashbord/profile/registration/registration.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/modules/doctor-dashbord/profile/education/education.component.ts");
/* harmony import */ var _connect_clinic_connect_clinic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect-clinic/connect-clinic.component */ "./src/app/modules/doctor-dashbord/profile/connect-clinic/connect-clinic.component.ts");
/* harmony import */ var _clinic_details_clinic_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clinic-details/clinic-details.component */ "./src/app/modules/doctor-dashbord/profile/clinic-details/clinic-details.component.ts");
/* harmony import */ var _identity_proof_identity_proof_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./identity-proof/identity-proof.component */ "./src/app/modules/doctor-dashbord/profile/identity-proof/identity-proof.component.ts");
/* harmony import */ var _registration_proof_registration_proof_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration-proof/registration-proof.component */ "./src/app/modules/doctor-dashbord/profile/registration-proof/registration-proof.component.ts");
/* harmony import */ var _clinic_proof_clinic_proof_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clinic-proof/clinic-proof.component */ "./src/app/modules/doctor-dashbord/profile/clinic-proof/clinic-proof.component.ts");
/* harmony import */ var _clinic_location_clinic_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clinic-location/clinic-location.component */ "./src/app/modules/doctor-dashbord/profile/clinic-location/clinic-location.component.ts");
/* harmony import */ var _clinic_timings_clinic_timings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clinic-timings/clinic-timings.component */ "./src/app/modules/doctor-dashbord/profile/clinic-timings/clinic-timings.component.ts");
/* harmony import */ var _consultant_details_consultant_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./consultant-details/consultant-details.component */ "./src/app/modules/doctor-dashbord/profile/consultant-details/consultant-details.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/modules/doctor-dashbord/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dynamic_autocomplete_dynamic_autocomplete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dynamic-autocomplete/dynamic-autocomplete.component */ "./src/app/modules/doctor-dashbord/profile/dynamic-autocomplete/dynamic-autocomplete.component.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");




















class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__["AutocompleteLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"],
        _connect_clinic_connect_clinic_component__WEBPACK_IMPORTED_MODULE_6__["ConnectClinicComponent"],
        _clinic_details_clinic_details_component__WEBPACK_IMPORTED_MODULE_7__["ClinicDetailsComponent"],
        _identity_proof_identity_proof_component__WEBPACK_IMPORTED_MODULE_8__["IdentityProofComponent"],
        _registration_proof_registration_proof_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationProofComponent"],
        _clinic_proof_clinic_proof_component__WEBPACK_IMPORTED_MODULE_10__["ClinicProofComponent"],
        _clinic_location_clinic_location_component__WEBPACK_IMPORTED_MODULE_11__["ClinicLocationComponent"],
        _clinic_timings_clinic_timings_component__WEBPACK_IMPORTED_MODULE_12__["ClinicTimingsComponent"],
        _consultant_details_consultant_details_component__WEBPACK_IMPORTED_MODULE_13__["ConsultantDetailsComponent"],
        _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
        _dynamic_autocomplete_dynamic_autocomplete_component__WEBPACK_IMPORTED_MODULE_17__["DynamicAutocompleteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__["AutocompleteLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"],
                    _connect_clinic_connect_clinic_component__WEBPACK_IMPORTED_MODULE_6__["ConnectClinicComponent"],
                    _clinic_details_clinic_details_component__WEBPACK_IMPORTED_MODULE_7__["ClinicDetailsComponent"],
                    _identity_proof_identity_proof_component__WEBPACK_IMPORTED_MODULE_8__["IdentityProofComponent"],
                    _registration_proof_registration_proof_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationProofComponent"],
                    _clinic_proof_clinic_proof_component__WEBPACK_IMPORTED_MODULE_10__["ClinicProofComponent"],
                    _clinic_location_clinic_location_component__WEBPACK_IMPORTED_MODULE_11__["ClinicLocationComponent"],
                    _clinic_timings_clinic_timings_component__WEBPACK_IMPORTED_MODULE_12__["ClinicTimingsComponent"],
                    _consultant_details_consultant_details_component__WEBPACK_IMPORTED_MODULE_13__["ConsultantDetailsComponent"],
                    _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileComponent"],
                    _dynamic_autocomplete_dynamic_autocomplete_component__WEBPACK_IMPORTED_MODULE_17__["DynamicAutocompleteComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__["AutocompleteLibModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/registration-proof/registration-proof.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/registration-proof/registration-proof.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RegistrationProofComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationProofComponent", function() { return RegistrationProofComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");








function RegistrationProofComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "One file is Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationProofComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Uplopad is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegistrationProofComponent {
    constructor(mainService, messageService, uploadService) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.uploadService = uploadService;
        this.items = [];
        this.getProfile();
    }
    getProfile() {
        this.mainService.getProfile().then(resData => {
            this.profileData = resData.data;
            this.registrationProff = this.profileData.registrationProff;
        }).catch(error => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    onSave() {
        if (this.registrationProff.length == '') {
            return;
        }
        this.mainService.updateUserprofile({ registrationProff: this.registrationProff }).then(resData => {
            this.showToast('success', 'Profile', 'Profile updated successfully');
            this.stepper.next();
        }).catch(error => {
            console.log("EditProfileComponent -> onSave -> error", error);
        });
    }
    browseFile(event) {
        const file = event.target.files;
        this.uploadService.upload(file).then(res => {
            this.registrationProff = res.files[0];
        }).catch(error => {
            console.error('error', error);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
    ngOnInit() { }
}
RegistrationProofComponent.ɵfac = function RegistrationProofComponent_Factory(t) { return new (t || RegistrationProofComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"])); };
RegistrationProofComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationProofComponent, selectors: [["app-registration-proof"]], inputs: { stepper: "stepper" }, decls: 47, vars: 5, consts: [[1, "bg-white", "p-sm-3"], [1, "row"], [1, "col-md-5", "col-lg-3", "offset-md-2"], [1, "mb-2", 2, "font-size", "15px"], [1, "border", "bgh", "m-auto"], [1, "img-fluid", 2, "padding", "0px", "width", "100%", "height", "150px", "background-color", "#eadfdf", 3, "src"], ["type", "file", 1, "d-none", 3, "change"], ["file", ""], [1, "btn", "border", "bg-white", "z-index", 2, "position", "absolute", "top", "0", "left", "0", "font-size", "1rem !important", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", 2, "margin", "0px"], ["class", "text-center display-block ", 4, "ngIf"], ["class", "error-block display-block text-center", 4, "ngIf"], [1, "pt-2", 2, "font-size", "12px"], ["mat-raised-button", "", "matStepperPrevious", ""], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "themeColorBtn", 2, "position", "absolute", "right", "0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-md-3", "col-lg-5", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [1, "text-center", "display-block"], [1, "error-block", "display-block", "text-center"]], template: function RegistrationProofComponent_Template(rf, ctx) { if (rf & 1) {
        const _r960 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegistrationProofComponent_Template_input_change_8_listener($event) { return ctx.browseFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationProofComponent_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r960); const _r957 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r957.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationProofComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegistrationProofComponent_div_13_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Please upload your identity proof to ensure that the ownership of your profile remains with only you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Acceptable documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Medical Registration Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "214 Maharashtra Medical Council");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Extra proofs required to be uploaded:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1. Establishment Proof");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationProofComponent_Template_button_click_37_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Save and continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 2.5M patients are looking for a doctor on WhealthyLife. Verify your credentials and reach out to them ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.registrationProff, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationProff);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.registrationProff);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n.bgh[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  text-align: center;\n  position: relative;\n  background-color: #ccced424;\n}\n\n.inside1[_ngcontent-%COMP%] {\n  list-style: inside;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.error-block[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n\n.danger[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9yZWdpc3RyYXRpb24tcHJvb2YvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHByb2ZpbGVcXHJlZ2lzdHJhdGlvbi1wcm9vZlxccmVnaXN0cmF0aW9uLXByb29mLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL3JlZ2lzdHJhdGlvbi1wcm9vZi9yZWdpc3RyYXRpb24tcHJvb2YuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0EsbUJBQUE7O0FBRUE7O0VBRUksY0FBQTtBQ0NKOztBRENBOztFQUVFLHlCQUFBO0FDRUY7O0FEQ0E7Ozs7RUFNRSxrQkFBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTtFQUNJO0lBQ0ksbUJBQUE7RUNBTjs7RURFRTs7OztJQUlGLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQ0NBO0FBQ0Y7O0FERUE7RUFDSSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL3JlZ2lzdHJhdGlvbi1wcm9vZi9yZWdpc3RyYXRpb24tcHJvb2YuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcclxufVxyXG5cclxuLnRleHRjb2wge1xyXG4gICAgY29sb3I6ICMxNGFhOWI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjUwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXRzZXRyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYmdoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NlZDQyNDtcclxufVxyXG5cclxuLmluc2lkZTEge1xyXG4gICAgbGlzdC1zdHlsZTogaW5zaWRlO1xyXG59XHJcbi8qIFN1Y2Nlc3Mgc3lsaW5nICovXHJcblxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlcixcclxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMztcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxyXG4ubWF0LWZhYi5tYXQtc3VjY2VzcyxcclxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XHJcbi8vICAgY29sb3I6ICNmMGZmZjM7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgLnBhZGRpbmdvbnhze1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MzBweCA7XHJcbiAgICB9ICBcclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZjBmZmYzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG5cclxufSBcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC5lcnJvci1ibG9jayB7XHJcbiAgICBjb2xvcjogI2UzNWE0OTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZGFuZ2Vye1xyXG4gICAgY29sb3I6ICNlMzVhNDk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iLCIuYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmOGY2O1xufVxuXG4udGV4dGNvbCB7XG4gIGNvbG9yOiAjMTRhYTliO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmJ1dHNldHIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYmdoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjZWQ0MjQ7XG59XG5cbi5pbnNpZGUxIHtcbiAgbGlzdC1zdHlsZTogaW5zaWRlO1xufVxuXG4vKiBTdWNjZXNzIHN5bGluZyAqL1xuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1zdWNjZXNzIHtcbiAgY29sb3I6ICMxNTU3MjQ7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzOmhvdmVyLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjM7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZhYi5tYXQtc3VjY2Vzcyxcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFkZGluZ29ueHMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgICBjb2xvcjogI2YwZmZmMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgfVxufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmVycm9yLWJsb2NrIHtcbiAgY29sb3I6ICNlMzVhNDk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRhbmdlciB7XG4gIGNvbG9yOiAjZTM1YTQ5O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationProofComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-proof',
                templateUrl: './registration-proof.component.html',
                styleUrls: ['./registration-proof.component.scss']
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/profile/registration/registration.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/profile/registration/registration.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../education/education.component */ "./src/app/modules/doctor-dashbord/profile/education/education.component.ts");
/* harmony import */ var _connect_clinic_connect_clinic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../connect-clinic/connect-clinic.component */ "./src/app/modules/doctor-dashbord/profile/connect-clinic/connect-clinic.component.ts");














const _c0 = ["stepper"];
function RegistrationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Medical Registration");
} }
function RegistrationComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registration Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_15_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r936 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r936.f.registrationNumber.errors.required);
} }
function RegistrationComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registration Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_20_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r937 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r937.f.registrationCouncil.errors.required);
} }
function RegistrationComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r945 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2019 - i_r945 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", 2019 - i_r945 + 1, " ");
} }
function RegistrationComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registration Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_26_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r939 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r939.f.registrationCouncil.errors.required);
} }
function RegistrationComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Education Qualification");
} }
function RegistrationComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Connect a practice");
} }
const _c1 = function () { return ["/Doctor/Profile"]; };
class RegistrationComponent {
    constructor(mainService, messageService, uploadService, formBuilder) {
        this.mainService = mainService;
        this.messageService = messageService;
        this.uploadService = uploadService;
        this.formBuilder = formBuilder;
        this.items = [];
        this.isLinear = false;
        this.submitted = false;
        this.hide = false;
        this.items.length = 81;
        this.getProfile();
    }
    ngOnInit() {
        this.profileform = this.formBuilder.group({
            registrationNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            registrationCouncil: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            registrationYear: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.secondFormGroup = this.formBuilder.group({});
        this.thirdFormGroup = this.formBuilder.group({});
    }
    get f() {
        return this.profileform.controls;
    }
    getProfile() {
        this.mainService
            .getProfile()
            .then((resData) => {
            this.profileform.patchValue(resData.data);
        })
            .catch((error) => {
            console.log("EditProfileComponent -> getProfile -> error", error);
        });
    }
    onSave(next) {
        console.log(this.profileform.value);
        this.submitted = true;
        if (this.profileform.invalid) {
            return;
        }
        var data = Object.assign(Object.assign({}, this.profileform.value), { avatar: this.avatar });
        this.mainService
            .updateUserprofile(data)
            .then((resData) => {
            console.log("EditProfileComponent -> onSave -> resData", resData);
            this.showToast("success", "Profile", "Profile updated successfully");
            next.next();
        })
            .catch((error) => {
            console.log("EditProfileComponent -> onSave -> error", error);
        });
    }
    browseFile(event) {
        const file = event.target.files;
        this.uploadService
            .upload(file)
            .then((res) => {
            this.avatar = res.files[0];
        })
            .catch((error) => {
            console.error("error", error);
        });
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({
                severity: type,
                summary: messageType,
                detail: message,
            });
        });
    }
    nextClicked(event) {
        // complete the current step
        this.stepper.selected.completed = true;
        // move to next step
        this.stepper.next();
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], viewQuery: function RegistrationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 50, vars: 16, consts: [[1, "custom-error", 3, "showTransformOptions"], ["linear", "", "mode", ""], ["stepper", ""], ["disableRipple", "true", 3, "stepControl"], ["matStepLabel", ""], [1, "bg-white", "p-sm-3"], [3, "formGroup"], [1, "container-fluid"], [1, "row"], [1, "col-md-5", "col-lg-3", "offset-md-2", "paddingonxs"], [1, "form-group-sm", "mb-3"], ["for", "RegistrationNumber"], ["type", "text", "id", "RegistrationNumber", "placeholder", "R-898977", "formControlName", "registrationNumber", 1, "form-control"], ["class", "error-block display-block", 4, "ngIf"], [1, "form-group"], ["for", "RegistrationCouncil"], ["type", "text", "id", "registrationNumber", "formControlName", "registrationCouncil", "placeholder", "Enter your council", 1, "form-control"], ["for", "RegistrationYear"], ["id", "RegistrationYear", "formControlName", "registrationYear", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-5", "mb-3"], ["mat-raised-button", "", 1, "mr-2", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-caret-left"], ["mat-raised-button", "", "color", "warn", 1, "ml-2", "themeColorBtn", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-caret-right"], [1, "col-md-3", "col-lg-5", "offset-md-1"], [1, "d-none", "d-sm-none", "d-md-block", "col-md-12", "col-lg-8", "mt-5", "ml-5", "pr-0", "pl-0", 2, "border", "1px solid #14aa9b"], [1, "bg", "p-4", "textcol"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o", "fa-lg"], [1, "stext", "font-weight-bold"], [3, "stepper"], [1, "error-block", "display-block"], [4, "ngIf"], [3, "value"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r947 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Registration Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationComponent_div_15_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Registration Council");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegistrationComponent_div_20_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Registration Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegistrationComponent_option_25_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegistrationComponent_div_26_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r947); const _r934 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSave(_r934); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save and Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " This information helps us perform critical checks to ensure that only licensed and genuine medical practitioners are listed on WhealthyLife. Your profile will get a \u201CVerified\u201D badge on verification. Doctors with verified profiles get 95% more patient views on WhealthyLife. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RegistrationComponent_ng_template_44_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-education", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RegistrationComponent_ng_template_48_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-connect-clinic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r934 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTransformOptions", "translateX(100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.registrationNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.registrationCouncil.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.registrationCouncil.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.profileform.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepper", _r934);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepper", _r934);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"], _connect_clinic_connect_clinic_component__WEBPACK_IMPORTED_MODULE_11__["ConnectClinicComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #dff8f6;\n}\n\n.textcol[_ngcontent-%COMP%] {\n  color: #14aa9b;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n\n.butsetr[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n\n\n\n.mat-button.mat-success[_ngcontent-%COMP%], .mat-stroked-button.mat-success[_ngcontent-%COMP%] {\n  color: #155724;\n}\n\n.mat-button.mat-success[_ngcontent-%COMP%]:hover, .mat-stroked-button.mat-success[_ngcontent-%COMP%]:hover {\n  background-color: #f0fff3;\n}\n\n.mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n}\n\n@media (max-width: 576px) {\n  .paddingonxs[_ngcontent-%COMP%] {\n    padding-right: 30px;\n  }\n\n  .mat-raised-button.mat-success[_ngcontent-%COMP%], .mat-flat-button.mat-success[_ngcontent-%COMP%], .mat-fab.mat-success[_ngcontent-%COMP%], .mat-mini-fab.mat-success[_ngcontent-%COMP%] {\n    color: #f0fff3;\n    background-color: #f6c23e;\n    position: absolute;\n    right: 30px;\n  }\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.display-block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.error-block[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n\n.danger[_ngcontent-%COMP%] {\n  color: #e35a49;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9yZWdpc3RyYXRpb24vQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHByb2ZpbGVcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9wcm9maWxlL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBRENBLG1CQUFBOztBQUVBOztFQUVJLGNBQUE7QUNDSjs7QURDQTs7RUFFRSx5QkFBQTtBQ0VGOztBRENBOzs7O0VBTUUsa0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDSTtJQUNJLG1CQUFBO0VDQU47O0VERUU7Ozs7SUFJRixjQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNDQTtBQUNGOztBREVBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcHJvZmlsZS9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmY4ZjY7XHJcbn1cclxuXHJcbi50ZXh0Y29sIHtcclxuICAgIGNvbG9yOiAjMTRhYTliO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMS41MHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0c2V0ciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4vKiBTdWNjZXNzIHN5bGluZyAqL1xyXG5cclxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbn1cclxuLm1hdC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIsXHJcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjM7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2VzcyxcclxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtbWluaS1mYWIubWF0LXN1Y2Nlc3Mge1xyXG4vLyAgIGNvbG9yOiAjZjBmZmYzO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmNmMyM2U7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NTc2cHgpIHtcclxuICAgIC5wYWRkaW5nb254c3tcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjMwcHggO1xyXG4gICAgfSAgXHJcbiAgICAubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmxhdC1idXR0b24ubWF0LXN1Y2Nlc3MsXHJcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxyXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcclxuICBjb2xvcjogI2YwZmZmMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjMjNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzBweDtcclxuXHJcbn0gXHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZXJyb3ItYmxvY2sge1xyXG4gICAgY29sb3I6ICNlMzVhNDk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmRhbmdlcntcclxuICAgIGNvbG9yOiAjZTM1YTQ5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjhmNjtcbn1cblxuLnRleHRjb2wge1xuICBjb2xvcjogIzE0YWE5Yjtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idXRzZXRyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLyogU3VjY2VzcyBzeWxpbmcgKi9cbi5tYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtc3VjY2Vzczpob3Zlcixcbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmYzO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LXN1Y2Nlc3MsXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mYWIubWF0LXN1Y2Nlc3MsXG4ubWF0LW1pbmktZmFiLm1hdC1zdWNjZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhZGRpbmdvbnhzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1zdWNjZXNzLFxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtc3VjY2Vzcyxcbi5tYXQtZmFiLm1hdC1zdWNjZXNzLFxuLm1hdC1taW5pLWZhYi5tYXQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICNmMGZmZjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2YzIzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5kaXNwbGF5LWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5lcnJvci1ibG9jayB7XG4gIGNvbG9yOiAjZTM1YTQ5O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kYW5nZXIge1xuICBjb2xvcjogI2UzNWE0OTtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-registration",
                templateUrl: "./registration.component.html",
                styleUrls: ["./registration.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["stepper"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");




class UploadService {
    constructor(apiCall) {
        this.apiCall = apiCall;
    }
    upload(file) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiCall.uploadUrl;
        return this.apiCall.upload(file, url);
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map