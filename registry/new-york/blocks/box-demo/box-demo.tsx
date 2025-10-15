import { BoxButton } from "@/registry/new-york/ui/box/box-button/BoxButton"
import { BoxIconButton } from "@/registry/new-york/ui/box/box-icon-button/BoxIconButton"
import { CloseIcon } from "@/registry/new-york/ui/box/icons/Close"

export default async function Page() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Button Variations</h2>
        <br />
        <h3>Primary</h3>
        <BoxButton>Click me</BoxButton>
        <h3>Secondary</h3>
        <BoxButton variant="secondary">Click me</BoxButton>
        <h3>Tertiary</h3>
        <BoxButton variant="tertiary">Click me</BoxButton>
        <h3>Small</h3>
        <BoxButton size="small">Click me</BoxButton>
        <h3>Large</h3>
        <BoxButton size="large">Click me</BoxButton>
      </div>

      <br />
      <br />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Icon Button Variations</h2>
        <br />
        <h3>Default</h3>
        <BoxIconButton variant="subtle"><CloseIcon /></BoxIconButton>
        <h3>Small</h3>
        <BoxIconButton size="small"><CloseIcon /></BoxIconButton>
        <h3>Large</h3>
        <BoxIconButton size="large"><CloseIcon /></BoxIconButton>
      </div>
    </div>
  )
}
