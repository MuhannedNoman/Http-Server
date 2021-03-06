/*
 * <#
 * .SYNOPSIS
 * <Overview of script>
 * .DESCRIPTION
 * <Brief description of script>
 * .PARAMETER <Parameter_Name>
 * <Brief description of parameter input required. Repeat this attribute if required>
 * .INPUTS
 * <Inputs if any, otherwise state None>
 * .OUTPUTS
 * <Outputs if anything is generated>
 * .NOTES
 *    Version:        0.1
 *    Author:         Muhanned Noman
 *    Creation Date:  Wednesday, January 29th 2020, 6:54:28 am
 *    File: App.js
 *    Copyright (c) 2020 Muhanned Noman
 * HISTORY:
 * Date      	          By	Comments
 * ----------	          ---	----------------------------------------------------------
 * 
 * .COMPONENT
 *  Required Modules: 
 * 
 * .LICENSE
 * MIT License
 * 
 * Copyright (c) 2020 Your Company
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *  
 * 
 * #---------------------------------------------------------[Initialisations]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Variables]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Modules]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Functions]--------------------------------------------------------
 */

const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
    const readStream = fs.createReadStream('./static/image.jpg');
    response.writeHead(200,{'Content-type' : 'image/jpg'});
    readStream.pipe(response);
}).listen("3005");

