function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Sg7SYXdSh5":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
SheetsSet('Nama', player.GetVar('TextEntry'));
}

