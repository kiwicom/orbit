# CountryFlag

To implement CountryFlag component into your project you'll need to add the import:

```jsx
import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag";
```

After adding import into your project you can use it simply like:

```jsx
<CountryFlag code="cz" name="Czech Republic" />
```

## Props

Table below contains all types of the props available in CountryFlag component.

| Name     | Type            | Default       | Description                          |
| :------- | :-------------- | :------------ | :----------------------------------- |
| code     | [`enum`](#enum) | `"undefined"` | Code for the displayed country flag. |
| dataTest | `string`        |               | Optional prop for testing purposes.  |
| id       | `string`        |               | Set `id` for `CountryFlag`           |
| name     | `string`        |               | The name for the flag.               |
| size     | [`enum`](#enum) | `"medium"`    | The size of the CountryFlag.         |

### enum

If code doesn't exist "undefined" will be used

| code          | size       |
| :------------ | :--------- |
| `"ad"`        | `"small"`  |
| `"ae"`        | `"medium"` |
| `"af"`        |
| `"ag"`        |
| `"ai"`        |
| `"al"`        |
| `"am"`        |
| `"an"`        |
| `"anywhere"`  |
| `"ao"`        |
| `"aq"`        |
| `"ar"`        |
| `"as"`        |
| `"at"`        |
| `"au"`        |
| `"aw"`        |
| `"ax"`        |
| `"az"`        |
| `"ba"`        |
| `"bb"`        |
| `"bd"`        |
| `"be"`        |
| `"bf"`        |
| `"bg"`        |
| `"bh"`        |
| `"bi"`        |
| `"bj"`        |
| `"bl"`        |
| `"bm"`        |
| `"bn"`        |
| `"bo"`        |
| `"bq"`        |
| `"br"`        |
| `"bs"`        |
| `"bt"`        |
| `"bv"`        |
| `"bw"`        |
| `"by"`        |
| `"bz"`        |
| `"ca-fr"`     |
| `"ca"`        |
| `"cc"`        |
| `"cd"`        |
| `"cf"`        |
| `"cg"`        |
| `"ch"`        |
| `"ci"`        |
| `"ck"`        |
| `"cl"`        |
| `"cm"`        |
| `"cn"`        |
| `"co"`        |
| `"cr"`        |
| `"cs"`        |
| `"ct"`        |
| `"cu"`        |
| `"cv"`        |
| `"cw"`        |
| `"cx"`        |
| `"cy"`        |
| `"cz"`        |
| `"de"`        |
| `"dj"`        |
| `"dk"`        |
| `"dm"`        |
| `"do"`        |
| `"dz"`        |
| `"ec"`        |
| `"ee"`        |
| `"eg"`        |
| `"eh"`        |
| `"er"`        |
| `"es"`        |
| `"et"`        |
| `"eu"`        |
| `"fi"`        |
| `"fj"`        |
| `"fk"`        |
| `"fm"`        |
| `"fo"`        |
| `"fr"`        |
| `"ga"`        |
| `"gb"`        |
| `"gd"`        |
| `"ge"`        |
| `"gf"`        |
| `"gg"`        |
| `"gh"`        |
| `"gi"`        |
| `"gl"`        |
| `"gm"`        |
| `"gn"`        |
| `"gp"`        |
| `"gq"`        |
| `"gr"`        |
| `"gs"`        |
| `"gt"`        |
| `"gu"`        |
| `"gw"`        |
| `"gy"`        |
| `"hk"`        |
| `"hm"`        |
| `"hn"`        |
| `"hr"`        |
| `"ht"`        |
| `"hu"`        |
| `"ic"`        |
| `"id"`        |
| `"ie"`        |
| `"il"`        |
| `"im"`        |
| `"in"`        |
| `"io"`        |
| `"iq"`        |
| `"ir"`        |
| `"is"`        |
| `"it"`        |
| `"je"`        |
| `"jm"`        |
| `"jo"`        |
| `"jp"`        |
| `"ke"`        |
| `"kg"`        |
| `"kh"`        |
| `"ki"`        |
| `"km"`        |
| `"kn"`        |
| `"kp"`        |
| `"kr"`        |
| `"kw"`        |
| `"ky"`        |
| `"kz"`        |
| `"la"`        |
| `"lb"`        |
| `"lc"`        |
| `"li"`        |
| `"lk"`        |
| `"lr"`        |
| `"ls"`        |
| `"lt"`        |
| `"lu"`        |
| `"lv"`        |
| `"ly"`        |
| `"ma"`        |
| `"mc"`        |
| `"md"`        |
| `"me"`        |
| `"mf"`        |
| `"mg"`        |
| `"mh"`        |
| `"mk"`        |
| `"ml"`        |
| `"mm"`        |
| `"mn"`        |
| `"mo"`        |
| `"mp"`        |
| `"mq"`        |
| `"mr"`        |
| `"ms"`        |
| `"mt"`        |
| `"mu"`        |
| `"mv"`        |
| `"mw"`        |
| `"mx"`        |
| `"my"`        |
| `"mz"`        |
| `"na"`        |
| `"nc"`        |
| `"ne"`        |
| `"nf"`        |
| `"ng"`        |
| `"ni"`        |
| `"nl"`        |
| `"no"`        |
| `"np"`        |
| `"nr"`        |
| `"nu"`        |
| `"nz"`        |
| `"om"`        |
| `"pa"`        |
| `"pe"`        |
| `"pf"`        |
| `"pg"`        |
| `"ph"`        |
| `"pk"`        |
| `"pl"`        |
| `"pm"`        |
| `"pn"`        |
| `"pr"`        |
| `"ps"`        |
| `"pt"`        |
| `"pw"`        |
| `"py"`        |
| `"qa"`        |
| `"re"`        |
| `"ro"`        |
| `"rs"`        |
| `"ru"`        |
| `"rw"`        |
| `"sa"`        |
| `"sb"`        |
| `"sc"`        |
| `"sd"`        |
| `"se"`        |
| `"sg"`        |
| `"sh"`        |
| `"si"`        |
| `"sj"`        |
| `"sk"`        |
| `"sl"`        |
| `"sm"`        |
| `"sn"`        |
| `"so"`        |
| `"sr"`        |
| `"ss"`        |
| `"st"`        |
| `"sv"`        |
| `"sx"`        |
| `"sy"`        |
| `"sz"`        |
| `"tc"`        |
| `"td"`        |
| `"tf"`        |
| `"tg"`        |
| `"th"`        |
| `"tj"`        |
| `"tk"`        |
| `"tl"`        |
| `"tm"`        |
| `"tn"`        |
| `"to"`        |
| `"tr"`        |
| `"tt"`        |
| `"tv"`        |
| `"tw"`        |
| `"tz"`        |
| `"ua"`        |
| `"ug"`        |
| `"um"`        |
| `"undefined"` |
| `"us"`        |
| `"uy"`        |
| `"uz"`        |
| `"va"`        |
| `"vc"`        |
| `"ve"`        |
| `"vg"`        |
| `"vi"`        |
| `"vn"`        |
| `"vu"`        |
| `"wf"`        |
| `"ws"`        |
| `"xk"`        |
| `"ye"`        |
| `"yt"`        |
| `"za"`        |
| `"zm"`        |
| `"zw"`        |
