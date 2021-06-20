@echo off
@title Builder

setlocal enabledelayedexpansion

cls

:START
echo Electron builder

set /p dir="Enter the source directory "
set /p build= "Enter the build version "


set Directory=dir
set Id=build
goto BUILD



:BUILD
echo running the builder
echo npx asar %Directory% builds/%Id%


:EOF
exit
