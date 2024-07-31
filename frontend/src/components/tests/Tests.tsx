import React, { useEffect } from 'react';
import 'mocha/mocha.js'; // Use the browser-specific Mocha build
import { runTests } from './unit'

export default function Test_Suite() {

    useEffect(() => {
        // Initialize Mocha
        mocha.setup('bdd');
        runTests();
        // Run Mocha
        mocha.run();

        // Cleanup function to reset Mocha state when the component unmounts
        return () => {
            mocha.suite.suites = [];
        };
    }, []);

    //NOTE: embedded css to only apply to this page
    return (
        <div>
            <style>{`
        @charset "utf-8";

        :root {
        --mocha-color: #000;
        --mocha-bg-color: #fff;
        --mocha-pass-icon-color: #00d6b2;
        --mocha-pass-color: #fff;
        --mocha-pass-shadow-color: rgba(0,0,0,.2);
        --mocha-pass-mediump-color: #c09853;
        --mocha-pass-slow-color: #b94a48;
        --mocha-test-pending-color: #0b97c4;
        --mocha-test-pending-icon-color: #0b97c4;
        --mocha-test-fail-color: #c00;
        --mocha-test-fail-icon-color: #c00;
        --mocha-test-fail-pre-color: #000;
        --mocha-test-fail-pre-error-color: #c00;
        --mocha-test-html-error-color: #000;
        --mocha-box-shadow-color: #eee;
        --mocha-box-bottom-color: #ddd;
        --mocha-test-replay-color: #000;
        --mocha-test-replay-bg-color: #eee;
        --mocha-stats-color: #888;
        --mocha-stats-em-color: #000;
        --mocha-stats-hover-color: #eee;
        --mocha-progress-ring-color: #eee;
        --mocha-progress-ring-highlight-color: #9f9f9f;
        --mocha-progress-text-color: #000;
        --mocha-error-color: #c00;

        --mocha-code-comment:  #ddd;
        --mocha-code-init: #2f6fad;
        --mocha-code-string: #5890ad;
        --mocha-code-keyword: #8a6343;
        --mocha-code-number: #2f6fad;
        }

        @media (prefers-color-scheme: dark) {
        :root {
            --mocha-color: #fff;
            --mocha-bg-color: #222;
            --mocha-pass-icon-color: #00d6b2;
            --mocha-pass-color: #222;
            --mocha-pass-shadow-color: rgba(255,255,255,.2);
            --mocha-pass-mediump-color: #f1be67;
            --mocha-pass-slow-color: #f49896;
            --mocha-test-pending-color: #0b97c4;
            --mocha-test-pending-icon-color: #0b97c4;
            --mocha-test-fail-color: #f44;
            --mocha-test-fail-icon-color: #f44;
            --mocha-test-fail-pre-color: #fff;
            --mocha-test-fail-pre-error-color: #f44;
            --mocha-test-html-error-color: #fff;
            --mocha-box-shadow-color: #444;
            --mocha-box-bottom-color: #555;
            --mocha-test-replay-color: #fff;
            --mocha-test-replay-bg-color: #444;
            --mocha-stats-color: #aaa;
            --mocha-stats-em-color: #fff;
            --mocha-stats-hover-color: #444;
            --mocha-progress-ring-color: #444;
            --mocha-progress-ring-highlight-color: #888;
            --mocha-progress-text-color: #fff;
            --mocha-error-color: #f44;

            --mocha-code-comment: #ddd;
            --mocha-code-init: #9cc7f1;
            --mocha-code-string: #80d4ff;
            --mocha-code-keyword: #e3a470;
            --mocha-code-number: #4ca7ff;
        }
        }

        body {
        margin: 0;
        background-color: var(--mocha-bg-color);
        color: var(--mocha-color);
        }

        #mocha {
            font: 20px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin: 60px 50px;
        }

        #mocha ul,
        #mocha li {
            margin: 0;
            padding: 0;
        }

        #mocha ul {
            list-style: none;
        }

        #mocha h1,
        #mocha h2 {
            margin: 0;
        }

        #mocha h1 {
            margin-top: 15px;
            font-size: 1em;
            font-weight: 200;
        }

        #mocha h1 a {
            text-decoration: none;
            color: inherit;
        }

        #mocha h1 a:hover {
            text-decoration: underline;
        }

        #mocha .suite .suite h1 {
            margin-top: 0;
            font-size: .8em;
        }

        #mocha .hidden {
            display: none;
        }

        #mocha h2 {
            font-size: 12px;
            font-weight: normal;
            cursor: pointer;
        }

        #mocha .suite {
            margin-left: 15px;
        }

        #mocha .test {
            margin-left: 15px;
            overflow: hidden;
        }

        #mocha .test.pending:hover h2::after {
            content: '(pending)';
            font-family: arial, sans-serif;
        }

        #mocha .test.pass.medium .duration {
            background: var(--mocha-pass-mediump-color);
        }

        #mocha .test.pass.slow .duration {
            background: var(--mocha-pass-slow-color);
        }

        #mocha .test.pass::before {
            content: '✓';
            font-size: 12px;
            display: block;
            float: left;
            margin-right: 5px;
            color: var(--mocha-pass-icon-color);
        }

        #mocha .test.pass .duration {
            font-size: 9px;
            margin-left: 5px;
            padding: 2px 5px;
            color: var(--mocha-pass-color);
            -webkit-box-shadow: inset 0 1px 1px var(--mocha-pass-shadow-color);
            -moz-box-shadow: inset 0 1px 1px var(--mocha-pass-shadow-color);
            box-shadow: inset 0 1px 1px var(--mocha-pass-shadow-color);
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            -ms-border-radius: 5px;
            -o-border-radius: 5px;
            border-radius: 5px;
        }

        #mocha .test.pass.fast .duration {
            display: none;
        }

        #mocha .test.pending {
            color: var(--mocha-test-pending-color);
        }

        #mocha .test.pending::before {
            content: '◦';
            color: var(--mocha-test-pending-icon-color);
        }

        #mocha .test.fail {
            color: var(--mocha-test-fail-color);
        }

        #mocha .test.fail pre {
            color: var(--mocha-test-fail-pre-color);
        }

        #mocha .test.fail::before {
            content: '✖';
            font-size: 12px;
            display: block;
            float: left;
            margin-right: 5px;
            color: var(--mocha-test-fail-icon-color);
        }

        #mocha .test pre.error {
            color: var(--mocha-test-fail-pre-error-color);
            max-height: 300px;
            overflow: auto;
        }

        #mocha .test .html-error {
            overflow: auto;
            color: var(--mocha-test-html-error-color);
            display: block;
            float: left;
            clear: left;
            font: 12px/1.5 monaco, monospace;
            margin: 5px;
            padding: 15px;
            border: 1px solid var(--mocha-box-shadow-color);
            max-width: 85%; /*(1)*/
            max-width: -webkit-calc(100% - 42px);
            max-width: -moz-calc(100% - 42px);
            max-width: calc(100% - 42px); /*(2)*/
            max-height: 300px;
            word-wrap: break-word;
            border-bottom-color: var(--mocha-box-bottom-color);
            -webkit-box-shadow: 0 1px 3px var(--mocha-box-shadow-color);
            -moz-box-shadow: 0 1px 3px var(--mocha-box-shadow-color);
            box-shadow: 0 1px 3px var(--mocha-box-shadow-color);
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
        }

        #mocha .test .html-error pre.error {
            border: none;
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            border-radius: 0;
            -webkit-box-shadow: 0;
            -moz-box-shadow: 0;
            box-shadow: 0;
            padding: 0;
            margin: 0;
            margin-top: 18px;
            max-height: none;
        }

        /**
        * (1): approximate for browsers not supporting calc
        * (2): 42 = 2*15 + 2*10 + 2*1 (padding + margin + border)
        *      ^^ seriously
        */
        #mocha .test pre {
            display: block;
            float: left;
            clear: left;
            font: 12px/1.5 monaco, monospace;
            margin: 5px;
            padding: 15px;
            border: 1px solid var(--mocha-box-shadow-color);
            max-width: 85%; /*(1)*/
            max-width: -webkit-calc(100% - 42px);
            max-width: -moz-calc(100% - 42px);
            max-width: calc(100% - 42px); /*(2)*/
            word-wrap: break-word;
            border-bottom-color: var(--mocha-box-bottom-color);
            -webkit-box-shadow: 0 1px 3px var(--mocha-box-shadow-color);
            -moz-box-shadow: 0 1px 3px var(--mocha-box-shadow-color);
            box-shadow: 0 1px 3px var(--mocha-box-shadow-color);
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
        }

        #mocha .test h2 {
            position: relative;
        }

        #mocha .test a.replay {
            position: absolute;
            top: 3px;
            right: 0;
            text-decoration: none;
            vertical-align: middle;
            display: block;
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            background: var(--mocha-test-replay-bg-color);
            font-size: 15px;
            -webkit-border-radius: 15px;
            -moz-border-radius: 15px;
            border-radius: 15px;
            -webkit-transition:opacity 200ms;
            -moz-transition:opacity 200ms;
            -o-transition:opacity 200ms;
            transition: opacity 200ms;
            opacity: 0.7;
            color: var(--mocha-test-replay-color);
        }

        #mocha .test:hover a.replay {
            box-shadow: 0 0 1px inset var(--mocha-test-replay-color);
            opacity: 1;
        }

        #mocha-report.pass .test.fail {
            display: none;
        }

        #mocha-report.fail .test.pass {
            display: none;
        }

        #mocha-report.pending .test.pass,
        #mocha-report.pending .test.fail {
            display: none;
        }
        #mocha-report.pending .test.pass.pending {
            display: block;
        }

        #mocha-error {
            color: var(--mocha-error-color);
            font-size: 1.5em;
            font-weight: 100;
            letter-spacing: 1px;
        }

        #mocha-stats {
            --ring-container-size: 40px;
            --ring-size: 39px;
            --ring-radius: calc(var(--ring-size) / 2);

            position: fixed;
            top: 15px;
            right: 10px;
            font-size: 12px;
            margin: 0;
            color: var(--mocha-stats-color);
            
        }

        #mocha-stats .progress-contain {
            float: right;
            padding: 0;
        }

        #mocha-stats :is(.progress-element, .progress-text) {
            width: var(--ring-container-size);
            display: block;
            top: 12px;
            position: absolute;
        }

        #mocha-stats .progress-element {
            visibility: hidden;
            height: calc(var(--ring-container-size) / 2);
        }

        #mocha-stats .progress-text {
            text-align: center;
            text-overflow: clip;
            overflow: hidden;
            color: var(--mocha-stats-em-color);
            font-size: 11px;
        }

        #mocha-stats .progress-ring {
            width: var(--ring-container-size);
            height: var(--ring-container-size);
        }

        #mocha-stats :is(.ring-flatlight, .ring-highlight) {
            --stroke-thickness: 1.65px;
            --center: calc(var(--ring-container-size) / 2);
            cx: var(--center);
            cy: var(--center);
            r: calc(var(--ring-radius) - calc(var(--stroke-thickness) / 2));
            fill: hsla(0, 0%, 0%, 0);
            stroke-width: var(--stroke-thickness);
        }

        #mocha-stats .ring-flatlight {
            stroke: var(--mocha-progress-ring-color);
        }

        #mocha-stats .ring-highlight {
            stroke: var(--mocha-progress-ring-highlight-color);
        }

        #mocha-stats em {
            color: var(--mocha-stats-em-color);
        }

        #mocha-stats a {
            text-decoration: none;
            color: inherit;
        }

        #mocha-stats a:hover {
            border-bottom: 1px solid var(--mocha-stats-hover-color);
        }

        #mocha-stats li {
            display: inline-block;
            margin: 0 5px;
            list-style: none;
            padding-top: 11px;
        }

        #mocha code .comment { color: var(--mocha-code-comment); }
        #mocha code .init { color: var(--mocha-code-init); }
        #mocha code .string { color: var(--mocha-code-string); }
        #mocha code .keyword { color: var(--mocha-code-keyword); }
        #mocha code .number { color: var(--mocha-code-number); }

        @media screen and (max-device-width: 480px) {
            #mocha {
                margin: 60px 0px;
            }

            #mocha #stats {
                position: absolute;
            }
        }
  `}</style>
            <div id="mocha"></div> {/* Mocha will render the test results here */}
        </div>
    );
}
