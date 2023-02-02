$("#biweekly")
              .countdown("2023/02/16 19:00", function(event) {
                $(this).text(
                  event.strftime('~%D days %H:%M:%S')
                );
              });