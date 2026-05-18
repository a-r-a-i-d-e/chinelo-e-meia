const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Spritefont2,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Behaviors.jumpthru,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.ResetGlobals
	];
};
self.C3_JsPropNameTable = [
	{FonteDeSprites: 0},
	{Plataforma: 0},
	{Sprite: 0},
	{Sólido: 0},
	{Senóide: 0},
	{PularAtravés: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{limbo: 0},
	{plataformafixa1: 0},
	{plataformafixa2: 0},
	{mfbnveokrnb: 0},
	{parabens: 0},
	{perdeu: 0},
	{plataformamovel: 0},
	{pontos: 0},
	{Teclado: 0},
	{Sprite5: 0},
	{Pontos: 0}
];

self.InstanceType = {
	FonteDeSprites: class extends self.ISpriteFontInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	limbo: class extends self.ISpriteInstance {},
	plataformafixa1: class extends self.ISpriteInstance {},
	plataformafixa2: class extends self.ISpriteInstance {},
	mfbnveokrnb: class extends self.ISpriteInstance {},
	parabens: class extends self.ITextInstance {},
	perdeu: class extends self.ITextInstance {},
	plataformamovel: class extends self.ISpriteInstance {},
	pontos: class extends self.ITextInstance {},
	Teclado: class extends self.IInstance {},
	Sprite5: class extends self.ISpriteInstance {}
}