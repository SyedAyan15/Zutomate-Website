/* Shared shape for the playbook flow charts (outbound, inbound).
 *
 * Only tools with a logo in /public/assets/tools carry one; the rest render as
 * text chips rather than shipping a broken image. Adding a logo file and its
 * filename here is all it takes to upgrade one. */

export type Item = { k: string; logo?: string };

export type Block =
  /* a heading that breaks the chain — used when one page carries more than one
     engine, so no connector runs into it or out of it */
  | { t: 'section'; k: string }
  | { t: 'step'; k: string }
  | { t: 'row'; items: Item[] }
  /* sequential rather than parallel — stacked so the order reads as a
     progression, not a set of choices */
  | { t: 'stack'; items: Item[] }
  | { t: 'cols'; groups: { k: string; items: Item[]; out?: Item }[] };

export type Step = { k: string; v: string };
