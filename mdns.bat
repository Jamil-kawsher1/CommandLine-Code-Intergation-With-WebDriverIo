@REM @echo off
@REM cd /D "D:\P hero Node\digipeak-backend"
@REM start node index.js
@REM exit


@REM @echo off
@REM start /B "Node" "D:\P hero Node\digipeak-backend\node.exe" "D:\P hero Node\digipeak-backend\index.js"
@REM pause
@REM exit

::Working This One
@REM @echo off

@REM start node "D:\P hero Node\digipeak-backend\index.js"
@REM exit



@echo off

:: Read the path from the external file
set /p NODE_PATH=<path.txt
echo %NODE_PATH%

:: Start Node.js with the specified path
start node "%NODE_PATH%\index.js"

exit
