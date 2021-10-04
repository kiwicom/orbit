import React from "react";
import { Box, Stack, Heading, Text, Popover, Button } from "@kiwicom/orbit-components";

export default function TestLockScrolling() {
  const [open, setOpen] = React.useState(false);
  const [openNested, setOpenNested] = React.useState(false);

  return (
    <Box padding="medium">
      <Stack direction="column" spacing="small">
        <Heading type="display">Background content</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil odit cumque fuga
          distinctio dignissimos blanditiis quibusdam dolorem. Cum fugiat debitis repudiandae
          beatae! Nam vitae dignissimos asperiores et fugit voluptatum?
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est minus blanditiis ipsam
          adipisci nulla sequi, fugiat vitae tempore consequuntur incidunt laborum, expedita
          consectetur rem error exercitationem dignissimos. Molestiae, aspernatur corrupti.
        </Text>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis molestias nam
          distinctio soluta vitae omnis fugit tenetur non hic enim, sint illo quia esse est dolorum!
          Eos provident soluta possimus.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facere ipsum modi,
          repellat cum nulla! Libero praesentium laboriosam vitae necessitatibus quam nihil adipisci
          reiciendis itaque hic expedita ipsam, asperiores dicta.
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis facere reprehenderit
          praesentium repudiandae eveniet earum totam nam quia quod reiciendis, recusandae, eaque
          placeat, nesciunt impedit fugiat enim! Alias, eveniet labore.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa nihil sed
          recusandae eius rerum. Excepturi labore beatae repellendus accusamus possimus dignissimos,
          corporis eligendi dolor praesentium ipsum optio distinctio ab.
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, minus? Ducimus
          pariatur obcaecati dolorem maxime, nostrum atque error distinctio voluptatum sapiente aut,
          tempora natus eius, iusto ipsum ex reiciendis odio?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis maxime quas molestias
          quibusdam architecto, deserunt debitis sed distinctio unde sint explicabo possimus
          molestiae ipsa iste numquam, ipsam eius temporibus aut?
        </Text>
        <Popover
          opened={open}
          content={
            <Stack direction="column" spacing="small">
              <Heading type="title1">Popover content</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta tempora
                natus ab recusandae, non fugiat sit, possimus molestias qui voluptatum laboriosam
                repellendus nemo. Aut sed eaque vero deleniti ducimus.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita animi quisquam
                nobis modi inventore, est veritatis cupiditate et ut porro repellendus temporibus ad
                quia explicabo facere recusandae officia ex reprehenderit.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolore qui
                temporibus. Aliquam error ad doloribus necessitatibus reprehenderit beatae, rem
                facere omnis in culpa? Animi omnis inventore quam ab. Odio?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, atque. Eos impedit
                magnam accusantium aperiam distinctio vitae qui iusto voluptatem eaque rerum
                laudantium id, vero molestias odio fugiat, nulla labore.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus iure ipsam
                tenetur asperiores. Alias voluptates veritatis eos unde, itaque fuga. Similique
                eveniet quos, laboriosam quia suscipit aperiam autem minus!
              </Text>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur minus saepe error
                molestiae debitis molestias expedita! Aperiam deleniti quia eos odio quos
                consequatur vel explicabo, aut tempore, eaque, officiis assumenda!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsa. Minima,
                eligendi eveniet! Adipisci, corporis optio. Error, molestias rem corporis inventore
                magnam nisi fugit debitis iure, illo necessitatibus dolorem dicta.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tempore ducimus
                dolores perspiciatis, rem cumque sed commodi accusantium ut ex quam, laboriosam quos
                nemo eum excepturi ipsa dolorum porro. Incidunt?
              </Text>
              <Popover
                opened={openNested}
                content={
                  <Stack direction="column" spacing="small">
                    <Heading type="title1">Popover content</Heading>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloremque,
                      perspiciatis quas rerum voluptate est facere dolorem accusantium eligendi
                      provident impedit fugiat ut illo quisquam dolore qui et id at.
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in natus
                      deleniti explicabo nam. Vitae ad at doloribus vel praesentium in cumque
                      architecto laudantium dicta, maiores quam, dolor labore sapiente.
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium
                      veniam ab dolorem tenetur veritatis nisi enim nobis, voluptates dolorum
                      adipisci tempora voluptatem sit expedita ex totam eos aliquid eius.
                    </Text>
                  </Stack>
                }
                actions={
                  <Button type="secondary" onClick={() => setOpenNested(false)}>
                    Close nested
                  </Button>
                }
                onClose={() => setOpenNested(false)}
              >
                <Button onClick={() => setOpenNested(true)}>Open nested</Button>
              </Popover>
            </Stack>
          }
          actions={
            <Button type="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          }
          onClose={() => setOpen(false)}
        >
          <Button onClick={() => setOpen(true)}>Open</Button>
        </Popover>
      </Stack>
    </Box>
  );
}
