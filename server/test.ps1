$name=$args[0]
cls
ghc -threaded -rtsopts -O2 -Wall -prof `
	$name `
    -o src/build/$name `
    -odir src/build `
    -hidir src/build `
    -main-is $name `
    -isrc
Invoke-Expression $("src/build/" + $name + ".exe +RTS -p -N8 -A512K -K8M -H1G")
rm src/build/$name.exe