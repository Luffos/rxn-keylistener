package com.rxnkeyhandler;

import android.app.Activity;
import android.util.Log;
import android.view.KeyEvent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

@ReactModule(name = RXNKeyHandlerModule.NAME)
public class RXNKeyHandlerModule extends ReactContextBaseJavaModule {
    public static final String NAME = "RXNKeyHandler";
    
    private ReactContext mReactContext;
    private DeviceEventManagerModule.RCTDeviceEventEmitter mJSModule = null;

    public RXNKeyHandlerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    public void onKeyDownEvent(int keyCode, KeyEvent keyEvent) {
        if (!mReactContext.hasActiveCatalystInstance()) {
            return;
        }

        if (mJSModule == null) {
            mJSModule = mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        //mJSModule.emit("onKeyDown", getJsEventParams(keyCode, keyEvent, null));
        Log.d("--->", "keyDown");
    };

    public void onKeyUpEvent(int keyCode, KeyEvent keyEvent) {
        if (!mReactContext.hasActiveCatalystInstance()) {
            return;
        }

        if (mJSModule == null) {
            mJSModule = mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        //mJSModule.emit("onKeyUp", getJsEventParams(keyCode, keyEvent, null));
        Log.d("--->", "keyUp");
    };
}