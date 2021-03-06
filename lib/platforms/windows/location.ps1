Add-Type -AssemblyName System.Device
$GeoWatcher = New-Object System.Device.Location.GeoCoordinateWatcher
$GeoWatcher.Start()

while (($GeoWatcher.Status -ne "Ready") -and ($GeoWatcher.Permission -ne "Denied")) {
    Start-Sleep -Milliseconds 100
}

if ($GeoWatcher.Permission -eq 'Denied'){
	Write-Error "Access wasn't granted for location information!"
} else {
    $GeoWatcher.Position.Location | Select Latitude,Longitude
}
